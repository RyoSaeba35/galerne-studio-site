import type { Lang } from './apps';
import type { Section } from './privacy';
import { publisher } from './publisher';
import { souffleTerms } from './terms-souffle';

/**
 * Terms of use for the apps that have a page on galernestudio.com.
 * One shared text, personalised with the app name. Every app listed here gets
 * /terms/<slug> and /fr/terms/<slug>.
 */

export { publisher } from './publisher';

interface AppTerms { name: string; updated: string; ads: boolean }

export const termsApps: Record<string, AppTerms> = {
  fidele: { name: 'Fidèle', updated: '2026-11-05', ads: true },
  'kotoba-ciphers': { name: 'Kotoba Ciphers', updated: '2026-11-05', ads: true },
  kioku: { name: 'Kioku', updated: '2026-11-05', ads: true },
  // Souffle has an account and a subscription: its own text, in terms-souffle.ts.
  souffle: { name: 'Souffle', updated: '2026-11-10', ads: false },
};

const p = publisher;

export function termsFor(slug: string, lang: Lang): Section[] {
  if (slug === 'souffle') return souffleTerms(lang);
  const app = termsApps[slug];
  const n = app.name;

  if (lang === 'fr') {
    return [
      {
        h: 'Éditeur',
        p: [
          `${n} est éditée par ${p.name}, entrepreneur individuel (micro-entreprise) exerçant sous le nom commercial ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact : ${p.email}.`,
          `${p.trade} agit en qualité de professionnel. Nous nous engageons à ne proposer que des produits et services conformes au droit de l’Union européenne et au droit français.`,
        ],
      },
      {
        h: 'Objet et acceptation',
        p: [
          `Les présentes conditions d’utilisation encadrent l’utilisation de l’application ${n}, distribuée sur Google Play. En installant ou en utilisant l’application, vous les acceptez. Si vous ne les acceptez pas, n’utilisez pas l’application.`,
          'Les conditions de Google Play s’appliquent également au téléchargement et à tout achat effectué via Google Play.',
        ],
      },
      {
        h: 'Prix',
        p: [
          `${n} est gratuite. ${app.ads ? 'Elle est financée par la publicité, comme indiqué dans sa politique de confidentialité. ' : ''}Si un achat intégré est proposé un jour, son prix et son contenu seront affichés avant la validation, et le paiement sera traité par Google Play.`,
        ],
      },
      {
        h: 'Licence d’utilisation',
        p: [
          `Nous vous accordons une licence personnelle, non exclusive, non cessible et gratuite pour utiliser ${n} sur vos appareils, à des fins privées et non commerciales.`,
          'Vous vous engagez à ne pas copier, modifier, décompiler ou redistribuer l’application, à ne pas contourner ses mesures techniques ou publicitaires, et à ne pas l’utiliser à des fins illicites.',
        ],
      },
      {
        h: 'Vos données',
        p: [
          `Les données que vous créez dans ${n} sont stockées sur votre appareil. Vous êtes responsable de leur sauvegarde : une désinstallation ou un changement de téléphone peut les effacer. Le traitement des données personnelles est décrit dans la politique de confidentialité de l’application, sur galernestudio.com/fr/privacy/${slug}.`,
        ],
      },
      ...(app.ads
        ? [{
            h: 'Publicité',
            p: ['L’application affiche des publicités de tiers et de Galerne Studio. Nous ne sommes pas responsables du contenu des sites ou offres de tiers vers lesquels une publicité peut vous diriger. Vous gérez votre consentement à la publicité personnalisée depuis les options de confidentialité de l’application.'],
          }]
        : []),
      {
        h: 'Mises à jour et disponibilité',
        p: [
          'Nous pouvons faire évoluer l’application (corrections, nouvelles fonctions, retrait de fonctions secondaires). Nous fournissons les mises à jour nécessaires pour qu’elle reste conforme pendant la durée à laquelle vous pouvez raisonnablement vous attendre. Nous ne garantissons pas un fonctionnement ininterrompu ni sur tous les appareils.',
        ],
      },
      {
        h: 'Garanties légales et responsabilité',
        p: [
          'Vous bénéficiez de la garantie légale de conformité applicable aux contenus et services numériques (articles L224-25-12 et suivants du Code de la consommation). En cas de défaut, écrivez-nous et nous chercherons à le corriger dans un délai raisonnable.',
          'Sous réserve de ces garanties légales, notre responsabilité ne peut être engagée pour les dommages indirects, ni pour une perte de données que vous auriez pu éviter par une sauvegarde. Rien dans ces conditions ne limite notre responsabilité en cas de faute lourde ou intentionnelle, ou dans les cas où la loi l’interdit.',
        ],
      },
      {
        h: 'Propriété intellectuelle',
        p: [`L’application, son code, son nom, son logo et ses contenus appartiennent à ${p.trade}, sauf mention contraire (licences de logiciels libres, citations du domaine public).`],
      },
      {
        h: 'Modification et fin',
        p: [
          'Nous pouvons modifier ces conditions. La nouvelle version est publiée sur cette page avec sa date. En cas de changement important, nous l’indiquerons dans l’application ou sur sa fiche Google Play.',
          'Vous pouvez cesser d’utiliser l’application à tout moment en la désinstallant.',
        ],
      },
      {
        h: 'Réclamations, médiation et droit applicable',
        p: [
          `Pour toute réclamation, écrivez à ${p.email}. Nous répondons dans les meilleurs délais.`,
          `Si aucune solution n’est trouvée, vous pouvez recourir gratuitement au médiateur de la consommation : ${p.mediator.name}, ${p.mediator.url}.`,
          'Ces conditions sont soumises au droit français. Si vous êtes consommateur dans un autre pays de l’Union européenne, vous conservez la protection des règles impératives de votre pays de résidence et pouvez saisir ses tribunaux.',
        ],
      },
    ];
  }

  return [
    {
      h: 'Publisher',
      p: [
        `${n} is published by ${p.name}, sole trader (micro-entreprise) trading as ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact: ${p.email}.`,
        `${p.trade} acts as a trader. We commit to only offer products and services that comply with European Union and French law.`,
      ],
    },
    {
      h: 'Scope and acceptance',
      p: [
        `These terms of use govern your use of the ${n} app, distributed on Google Play. By installing or using the app, you accept them. If you do not accept them, do not use the app.`,
        'Google Play’s terms also apply to the download and to any purchase made through Google Play.',
      ],
    },
    {
      h: 'Price',
      p: [
        `${n} is free. ${app.ads ? 'It is funded by advertising, as described in its privacy policy. ' : ''}If an in-app purchase is ever offered, its price and content will be shown before you confirm, and payment will be handled by Google Play.`,
      ],
    },
    {
      h: 'Licence',
      p: [
        `We grant you a personal, non-exclusive, non-transferable, free licence to use ${n} on your devices for private, non-commercial purposes.`,
        'You agree not to copy, modify, decompile or redistribute the app, not to bypass its technical or advertising measures, and not to use it for unlawful purposes.',
      ],
    },
    {
      h: 'Your data',
      p: [
        `The data you create in ${n} is stored on your device. You are responsible for backing it up: uninstalling the app or changing phones may erase it. How personal data is handled is described in the app’s privacy policy, at galernestudio.com/privacy/${slug}.`,
      ],
    },
    ...(app.ads
      ? [{
          h: 'Advertising',
          p: ['The app shows ads from third parties and from Galerne Studio. We are not responsible for the content of third-party sites or offers an ad may lead you to. You manage your consent to personalised ads from the privacy options in the app.'],
        }]
      : []),
    {
      h: 'Updates and availability',
      p: [
        'We may change the app (fixes, new features, removal of secondary features). We provide the updates needed to keep it in conformity for as long as you can reasonably expect. We do not guarantee uninterrupted operation or compatibility with every device.',
      ],
    },
    {
      h: 'Statutory guarantees and liability',
      p: [
        'You benefit from the statutory guarantee of conformity for digital content and services (articles L224-25-12 and following of the French Consumer Code). If something is defective, write to us and we will aim to fix it within a reasonable time.',
        'Subject to these statutory guarantees, we are not liable for indirect damage, or for loss of data you could have avoided by making a backup. Nothing in these terms limits our liability for gross negligence or wilful misconduct, or where the law does not allow it.',
      ],
    },
    {
      h: 'Intellectual property',
      p: [`The app, its code, name, logo and content belong to ${p.trade} unless stated otherwise (open-source licences, public-domain quotations).`],
    },
    {
      h: 'Changes and ending',
      p: [
        'We may change these terms. The new version is published on this page with its date. For significant changes, we will say so in the app or on its Google Play listing.',
        'You can stop using the app at any time by uninstalling it.',
      ],
    },
    {
      h: 'Complaints, mediation and governing law',
      p: [
        `For any complaint, write to ${p.email}. We reply as quickly as we can.`,
        `If we cannot resolve it, you can refer the matter free of charge to our consumer mediator: ${p.mediator.name}, ${p.mediator.url}.`,
        'These terms are governed by French law. If you are a consumer in another EU country, you keep the protection of the mandatory rules of your country of residence and may bring a claim before its courts.',
      ],
    },
  ];
}
