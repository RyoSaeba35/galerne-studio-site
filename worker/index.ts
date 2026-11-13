/**
 * Galerne Studio site worker.
 * Static files are served from ./dist by Cloudflare. Only /api/* runs this code
 * (see "run_worker_first" in wrangler.jsonc).
 *
 * POST /api/contact  ->  emails the "Work with us" form to CONTACT_TO via Cloudflare Email Routing.
 */
import { EmailMessage } from 'cloudflare:email';

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  /** send_email binding (wrangler.jsonc) */
  CONTACT_EMAIL: { send: (msg: EmailMessage) => Promise<void> };
  /** Verified Email Routing destination (your real inbox). Set with: npx wrangler secret put CONTACT_TO */
  CONTACT_TO: string;
  /** Sender on galernestudio.com. Defaults to form@galernestudio.com */
  CONTACT_FROM?: string;
  /** Optional: Turnstile secret key. When set, the form token is required. */
  TURNSTILE_SECRET?: string;
  /** Optional: rate limiting binding */
  CONTACT_LIMITER?: { limit: (o: { key: string }) => Promise<{ success: boolean }> };
}

const MAX = { name: 120, email: 200, company: 160, type: 60, timeline: 60, message: 5000 };
const EMAIL_RE = /^[^\s@<>()"',;:]+@[^\s@<>()"',;:]+\.[^\s@<>()"',;:]{2,}$/;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405, { Allow: 'POST' });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  const fail = (error: string, status = 400) =>
    wantsJson ? json({ ok: false, error }, status) : redirect(request, 'error');

  // Same-origin only
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return fail('origin', 403);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (env.CONTACT_LIMITER) {
    const { success } = await env.CONTACT_LIMITER.limit({ key: ip });
    if (!success) return fail('rate', 429);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail('body');
  }
  const get = (k: keyof typeof MAX) => clean(String(form.get(k) ?? ''), MAX[k]);

  // Honeypot: bots fill every field. Pretend it worked.
  if (String(form.get('website') ?? '').trim()) return wantsJson ? json({ ok: true }) : redirect(request, 'sent');

  const data = {
    name: oneLine(get('name')),
    email: oneLine(get('email')),
    company: oneLine(get('company')),
    type: oneLine(get('type')),
    timeline: oneLine(get('timeline')),
    message: get('message'),
    lang: String(form.get('lang') ?? 'en') === 'fr' ? 'fr' : 'en',
  };
  if (!data.name || !EMAIL_RE.test(data.email) || data.message.length < 20) return fail('invalid');

  if (env.TURNSTILE_SECRET) {
    const token = String(form.get('cf-turnstile-response') ?? '');
    if (!token) return fail('captcha');
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip }),
    });
    const result = (await verify.json()) as { success?: boolean };
    if (!result.success) return fail('captcha');
  }

  if (!env.CONTACT_TO) return fail('config', 500);
  const from = env.CONTACT_FROM || 'form@galernestudio.com';

  const body = [
    `New project request from galernestudio.com (${data.lang.toUpperCase()})`,
    '',
    `Name:      ${data.name}`,
    `Email:     ${data.email}`,
    `Company:   ${data.company || '-'}`,
    `Type:      ${data.type || '-'}`,
    `Timeline:  ${data.timeline || '-'}`,
    '',
    'Message:',
    data.message,
    '',
    '--',
    `IP: ${ip} · Country: ${request.headers.get('CF-IPCountry') || '?'}`,
    'Reply to this email to answer the client directly.',
  ].join('\n');

  const subject = `[Galerne] ${data.type || 'Project'}: ${data.name}${data.company ? ` (${data.company})` : ''}`;
  const raw = buildMime({
    from: { name: 'Galerne Studio site', addr: from },
    to: env.CONTACT_TO,
    replyTo: { name: data.name, addr: data.email },
    subject,
    text: body,
  });

  try {
    await env.CONTACT_EMAIL.send(new EmailMessage(from, env.CONTACT_TO, raw));
  } catch (err) {
    console.error('send_email failed', err);
    return fail('send', 502);
  }
  return wantsJson ? json({ ok: true }) : redirect(request, 'sent');
}

/* ---------- helpers ---------- */

function clean(v: string, max: number): string {
  return v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}
function oneLine(v: string): string {
  return v.replace(/[\r\n]+/g, ' ').trim();
}

function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers },
  });
}

/** No-JS fallback: back to the form on the right language page. */
function redirect(request: Request, state: 'sent' | 'error'): Response {
  const referer = request.headers.get('Referer') || '';
  const base = new URL(request.url);
  const path = referer.includes('/fr') ? '/fr' : '/';
  return Response.redirect(`${base.origin}${path}?form=${state}#work`, 303);
}

function b64utf8(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
/** RFC 2047 encoded-word, only when needed */
function encWord(s: string): string {
  return /^[\x20-\x7E]*$/.test(s) ? s : `=?UTF-8?B?${b64utf8(s)}?=`;
}
function addr(a: { name: string; addr: string }): string {
  const name = a.name.replace(/["\\]/g, '');
  return /^[\x20-\x7E]*$/.test(name) ? `"${name}" <${a.addr}>` : `${encWord(name)} <${a.addr}>`;
}

function buildMime(o: {
  from: { name: string; addr: string };
  to: string;
  replyTo: { name: string; addr: string };
  subject: string;
  text: string;
}): string {
  const domain = o.from.addr.split('@')[1];
  const body = b64utf8(o.text).replace(/.{1,76}/g, '$&\r\n');
  return [
    `From: ${addr(o.from)}`,
    `To: <${o.to}>`,
    `Reply-To: ${addr(o.replyTo)}`,
    `Subject: ${encWord(o.subject)}`,
    `Date: ${new Date().toUTCString().replace('GMT', '+0000')}`,
    `Message-ID: <${crypto.randomUUID()}@${domain}>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    body,
  ].join('\r\n');
}
