import type { Lang } from './data/apps';

export const site = {
  name: 'Galerne Studio',
  email: 'contact@galernestudio.com',
  x: 'https://x.com/galernestudio',
  firefly: 'https://www.thelittlefirefly.co.uk',
};

/** Path for a page in a given language. `path` is the English path, e.g. "/apps/fidele". */
export function localePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === 'fr' ? `/fr${clean}` || '/fr' : clean || '/';
}

export const t = {
  en: {
    metaDesc: 'Galerne Studio is an independent software studio in Lyon, France, building focused apps for Android and Windows.',
    nav: { apps: 'Apps', about: 'About', contact: 'Contact', switchLabel: 'Version française', switchText: 'FR' },
    hero: {
      eyebrow: 'Independent software studio · Lyon, France',
      title: 'Small apps that do one thing well.',
      sub: 'Galerne Studio builds focused, privacy-minded apps for Android and Windows. No bloat, no dark patterns, just tools that work.',
      cta1: 'Browse the apps',
      cta2: 'Get in touch',
      stats: ['apps shipped', 'on Google Play', 'for Windows'],
    },
    apps: {
      title: 'Our apps',
      sub: 'Everything we’ve shipped, on mobile and desktop.',
      filters: { all: 'All', android: 'Android', windows: 'Windows' },
      filterLabel: 'Filter apps by platform',
      details: 'Details',
      website: 'Website',
      play: 'Google Play',
      msStore: 'Microsoft Store',
      opensIn: (name: string) => `${name} website`,
    },
    also: {
      eyebrow: 'Also by Galerne Studio',
      desc: 'practical guides for people moving to the UK to study, work or live.',
      visit: 'Visit thelittlefirefly.co.uk',
    },
    about: {
      title: 'Named after a wind.',
      body: 'The galerne is the northwest wind that sweeps the French Atlantic coast: sudden, clear and cold. Galerne Studio is a one-person studio in Lyon building software with the same spirit: light, fast and honest.',
      values: [
        { icon: 'clock', title: 'Focused', body: 'Each app solves one problem and gets out of your way.' },
        { icon: 'lock', title: 'Privacy-minded', body: 'We collect as little data as we can, and say clearly what we do collect.' },
        { icon: 'pin', title: 'Made in France', body: 'Designed, built and supported from Lyon.' },
      ],
    },
    contact: {
      title: 'Questions, bugs or ideas?',
      sub: 'Every message is read by the person who wrote the app.',
    },
    footer: { legal: 'Legal notice', privacy: 'Privacy policies', rights: 'Lyon, France' },
    appPage: {
      breadcrumb: 'Apps',
      getPlay: 'Get it on Google Play',
      what: 'What it does',
      privacyTitle: 'Privacy',
      privacyBody: (name: string) => `How ${name} handles your data, ads and consent.`,
      privacyLink: 'Read the privacy policy',
      supportTitle: 'Support',
    },
    privacy: {
      title: 'Privacy policies',
      intro: 'Each Galerne Studio app has its own privacy policy. Apps with their own website publish it there.',
      updated: 'Last updated',
      policyFor: (name: string) => `${name} privacy policy`,
    },
    legal: { title: 'Legal notice' },
    notFound: { title: 'Page not found', body: 'This page does not exist or has moved.', back: 'Back to home' },
  },
  fr: {
    metaDesc: 'Galerne Studio est un studio de logiciels indépendant basé à Lyon, qui crée des applications simples et efficaces pour Android et Windows.',
    nav: { apps: 'Applications', about: 'À propos', contact: 'Contact', switchLabel: 'English version', switchText: 'EN' },
    hero: {
      eyebrow: 'Studio de logiciels indépendant · Lyon, France',
      title: 'Des petites applis qui font une chose, et bien.',
      sub: 'Galerne Studio crée des applications simples et respectueuses de la vie privée pour Android et Windows. Sans superflu, sans pièges, juste des outils qui marchent.',
      cta1: 'Voir les applications',
      cta2: 'Nous contacter',
      stats: ['applications publiées', 'sur Google Play', 'pour Windows'],
    },
    apps: {
      title: 'Nos applications',
      sub: 'Tout ce que nous avons publié, sur mobile et sur ordinateur.',
      filters: { all: 'Toutes', android: 'Android', windows: 'Windows' },
      filterLabel: 'Filtrer les applications par plateforme',
      details: 'Détails',
      website: 'Site web',
      play: 'Google Play',
      msStore: 'Microsoft Store',
      opensIn: (name: string) => `Site web de ${name}`,
    },
    also: {
      eyebrow: 'Aussi par Galerne Studio',
      desc: 'des guides pratiques pour s’installer au Royaume-Uni pour étudier, travailler ou vivre.',
      visit: 'Visiter thelittlefirefly.co.uk',
    },
    about: {
      title: 'Le nom d’un vent.',
      body: 'La galerne est le vent de nord-ouest qui balaie la côte atlantique : soudain, clair et froid. Galerne Studio est un studio d’une personne, à Lyon, qui conçoit des logiciels dans le même esprit : légers, rapides et honnêtes.',
      values: [
        { icon: 'clock', title: 'Simples', body: 'Chaque appli résout un problème, puis se fait oublier.' },
        { icon: 'lock', title: 'Respect de la vie privée', body: 'Nous collectons le moins de données possible, et disons clairement lesquelles.' },
        { icon: 'pin', title: 'Fait en France', body: 'Conçu, développé et maintenu depuis Lyon.' },
      ],
    },
    contact: {
      title: 'Une question, un bug, une idée ?',
      sub: 'Chaque message est lu par la personne qui a écrit l’application.',
    },
    footer: { legal: 'Mentions légales', privacy: 'Politiques de confidentialité', rights: 'Lyon, France' },
    appPage: {
      breadcrumb: 'Applications',
      getPlay: 'Disponible sur Google Play',
      what: 'Ce que fait l’appli',
      privacyTitle: 'Confidentialité',
      privacyBody: (name: string) => `Comment ${name} traite vos données, la publicité et votre consentement.`,
      privacyLink: 'Lire la politique de confidentialité',
      supportTitle: 'Assistance',
    },
    privacy: {
      title: 'Politiques de confidentialité',
      intro: 'Chaque application Galerne Studio a sa propre politique de confidentialité. Les applis qui ont leur propre site la publient sur celui-ci.',
      updated: 'Dernière mise à jour',
      policyFor: (name: string) => `Politique de confidentialité de ${name}`,
    },
    legal: { title: 'Mentions légales' },
    notFound: { title: 'Page introuvable', body: 'Cette page n’existe pas ou a été déplacée.', back: 'Retour à l’accueil' },
  },
} as const;

export type Strings = (typeof t)['en'];
