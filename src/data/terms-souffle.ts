import type { Lang } from './apps';
import type { Section } from './privacy';
import { publisher as p } from './publisher';

/**
 * Terms of use for Souffle: an account, a free weekly allowance and a paid subscription
 * (Souffle Pro, sold through Google Play), so it needs more than the shared terms of the
 * free apps. Keep the numbers in sync with the server (FREE_WEEKLY_WORDS,
 * FREE_WEEKLY_AUDIO_MINUTES, PRO_WEEKLY_WORDS, PRO_WEEKLY_AUDIO_MINUTES).
 */
export const souffleLimits = {
  freeWords: '2,000',
  freeWordsFr: '2 000',
  proWords: '50,000',
  proWordsFr: '50 000',
  price: '€5.99',
  priceFr: '5,99 €',
};

const l = souffleLimits;

export function souffleTerms(lang: Lang): Section[] {
  if (lang === 'fr') {
    return [
      {
        h: 'Éditeur',
        p: [
          `Souffle est éditée par ${p.name}, entrepreneur individuel (micro-entreprise) exerçant sous le nom commercial ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact : ${p.email}.`,
          `${p.trade} agit en qualité de professionnel. Nous nous engageons à ne proposer que des produits et services conformes au droit de l’Union européenne et au droit français.`,
        ],
      },
      {
        h: 'Objet et acceptation',
        p: [
          'Les présentes conditions encadrent l’utilisation de l’application Souffle et de son service de dictée en ligne, ainsi que l’abonnement Souffle Pro. En créant un compte, vous les acceptez. Si vous ne les acceptez pas, n’utilisez pas Souffle.',
          'Les conditions de Google Play s’appliquent aussi au téléchargement et au paiement. Le traitement de vos données est décrit dans la politique de confidentialité de Souffle, sur galernestudio.com/fr/privacy/souffle.',
        ],
      },
      {
        h: 'Le service',
        p: [
          'Souffle transforme votre voix en texte et le saisit dans les autres applications de votre téléphone. Le service fonctionne en ligne : vos enregistrements sont envoyés à notre serveur et traités par des services d’intelligence artificielle (reconnaissance vocale, puis mise en forme légère : suppression des hésitations, ponctuation, paragraphes). Il nécessite une connexion internet, le service d’accessibilité d’Android et l’accès au micro.',
          'La reconnaissance vocale et la mise en forme automatiques peuvent comporter des erreurs. Relisez toujours le texte avant de l’envoyer. Souffle n’est pas conçu pour des usages où une erreur pourrait avoir des conséquences graves (urgences, consignes médicales, documents juridiques) sans relecture.',
        ],
      },
      {
        h: 'Votre compte',
        p: [
          'Un compte Souffle est créé avec votre compte Google. Il est personnel : vous ne pouvez ni le partager ni le revendre. Vous êtes responsable de l’accès à vos appareils connectés.',
          'Vous pouvez supprimer votre compte à tout moment depuis l’application (Paramètres > Supprimer le compte). La suppression du compte ne résilie pas un abonnement en cours : résiliez-le d’abord dans Google Play.',
        ],
      },
      {
        h: 'Offre gratuite',
        p: [
          `L’offre gratuite permet de dicter jusqu’à ${l.freeWordsFr} mots et 1 heure d’enregistrement par semaine. Le compteur repart à zéro chaque lundi à 00 h 00 UTC. Quand la limite est atteinte, la dictée est en pause jusqu’au lundi suivant, ou jusqu’à ce que vous passiez à Pro.`,
          'Nous pouvons faire évoluer l’offre gratuite. Toute réduction sera annoncée dans l’application au moins 30 jours à l’avance.',
        ],
      },
      {
        h: 'Souffle Pro',
        p: [
          `Souffle Pro est un abonnement mensuel qui offre une dictée illimitée, dans le cadre d’un usage raisonnable (voir ci-dessous). Son prix est de ${l.priceFr} par mois TTC en France ; le prix applicable dans votre pays, taxes comprises, est affiché par Google Play avant la validation.`,
          'Le paiement est traité par Google Play. L’abonnement se renouvelle automatiquement chaque mois, au même prix, jusqu’à ce que vous le résiliiez. Vous pouvez le résilier à tout moment, en quelques clics, dans Google Play (Paiements et abonnements > Abonnements) ou depuis le bouton Gérer de l’application. La résiliation prend effet à la fin de la période déjà payée : Pro reste actif jusque-là, et aucun mois entamé n’est remboursé, sauf dans les cas prévus par la loi ou par Google Play.',
          'Si le paiement échoue, Google Play vous laisse jusqu’à 7 jours pour mettre à jour votre moyen de paiement, pendant lesquels Pro reste actif.',
          'En cas de hausse de prix, vous serez prévenu à l’avance par Google Play, qui vous demandera votre accord ou vous permettra de résilier sans frais avant son application. Des offres de lancement ou d’essai peuvent être proposées ; leurs conditions sont affichées avant l’achat.',
        ],
      },
      {
        h: 'Usage raisonnable',
        id: 'fair-use',
        p: [
          'Souffle Pro est illimité pour un usage personnel, même intensif. Pour protéger le service contre les usages automatisés et les abus, un plafond d’usage raisonnable s’applique :',
        ],
        ul: [
          `${l.proWordsFr} mots et 8 heures d’enregistrement par semaine, soit environ 1 h 30 de parole chaque jour. Une personne qui dicte normalement ne l’atteint pas.`,
          'Si vous l’atteignez, la dictée est en pause jusqu’au lundi suivant. Vous en êtes informé dans l’application, et votre abonnement n’est ni suspendu ni facturé davantage.',
          `Si votre usage personnel le justifie, écrivez à ${p.email} : nous relèverons votre plafond.`,
        ],
      },
      {
        h: 'Droit de rétractation',
        id: 'withdrawal',
        p: [
          'Vous disposez de 14 jours à compter de la souscription pour vous rétracter, sans avoir à vous justifier. En souscrivant, vous demandez que Souffle Pro commence immédiatement. Si vous vous rétractez, vous êtes remboursé, déduction faite d’un montant proportionnel à la période déjà écoulée (article L221-25 du Code de la consommation).',
          `Pour vous rétracter, demandez un remboursement dans Google Play (play.google.com > Historique des commandes) ou envoyez-nous une déclaration claire à ${p.email}, par exemple : « Je vous notifie par la présente ma rétractation du contrat portant sur l’abonnement Souffle Pro souscrit le [date], compte [adresse e-mail], numéro de commande Google Play [GPA.…]. » Nous vous remboursons sous 14 jours par le moyen de paiement utilisé.`,
        ],
      },
      {
        h: 'Utilisation acceptable',
        p: ['Vous vous engagez à ne pas :'],
        ul: [
          'accéder au service autrement que par l’application Souffle (scripts, robots, appels directs à notre serveur) ;',
          'partager, revendre ou louer votre compte ou votre abonnement ;',
          'contourner les limites, les mesures de sécurité ou les mesures techniques de l’application, ni la copier, la modifier ou la décompiler ;',
          'utiliser Souffle pour produire des contenus illicites, ou pour harceler, menacer ou tromper autrui.',
        ],
      },
      {
        h: 'Vos contenus',
        p: [
          'Ce que vous dictez vous appartient. Nous ne le conservons pas, et nous ne l’utilisons que le temps de le transformer en texte pour vous. Vous restez responsable des textes que vous envoyez avec Souffle.',
        ],
      },
      {
        h: 'Disponibilité et évolutions',
        p: [
          'Souffle dépend d’internet, de Google Play et de nos prestataires d’IA. Nous faisons notre possible pour que le service soit disponible, sans pouvoir garantir un fonctionnement ininterrompu ni la compatibilité avec chaque application, clavier ou téléphone. Une interruption prolongée de Souffle Pro par notre faute donne droit, sur demande, à un geste proportionné.',
          'Nous pouvons faire évoluer Souffle (corrections, nouvelles fonctions, changement de prestataire) et fournissons les mises à jour nécessaires pour qu’il reste conforme pendant la durée de votre abonnement.',
        ],
      },
      {
        h: 'Garanties légales et responsabilité',
        p: [
          'Vous bénéficiez de la garantie légale de conformité applicable aux contenus et services numériques (articles L224-25-12 et suivants du Code de la consommation). En cas de défaut, écrivez-nous : nous chercherons à le corriger dans un délai raisonnable, ou à défaut vous rembourserons.',
          'Sous réserve de ces garanties, notre responsabilité ne peut être engagée pour un texte envoyé sans relecture ni pour les dommages indirects. Rien dans ces conditions ne limite notre responsabilité en cas de faute lourde ou intentionnelle, ou lorsque la loi l’interdit.',
        ],
      },
      {
        h: 'Suspension et fin',
        p: [
          'Vous pouvez cesser d’utiliser Souffle à tout moment et supprimer votre compte depuis l’application.',
          'En cas de manquement grave à ces conditions (accès automatisé, revente, fraude, contournement des limites), nous pouvons suspendre ou fermer le compte, après vous avoir prévenu par e-mail et laissé l’occasion de répondre, sauf urgence pour la sécurité du service. La partie non utilisée d’un abonnement vous est remboursée si la fermeture ne découle pas d’un tel manquement.',
        ],
      },
      {
        h: 'Propriété intellectuelle',
        p: [`L’application, son code, son nom, son logo et ses contenus appartiennent à ${p.trade}, sauf mention contraire (licences de logiciels libres, visibles dans Paramètres > Licences open source).`],
      },
      {
        h: 'Modification des conditions',
        p: [
          'Nous pouvons modifier ces conditions. La nouvelle version est publiée sur cette page avec sa date. Pour un changement important touchant Souffle Pro, nous vous prévenons dans l’application au moins 30 jours à l’avance ; vous pouvez alors résilier sans frais.',
        ],
      },
      {
        h: 'Réclamations, médiation et droit applicable',
        p: [
          `Pour toute réclamation, écrivez à ${p.email}. Nous répondons sous 7 jours ouvrés.`,
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
        `Souffle is published by ${p.name}, sole trader (micro-entreprise) trading as ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact: ${p.email}.`,
        `${p.trade} acts as a trader. We commit to only offer products and services that comply with European Union and French law.`,
      ],
    },
    {
      h: 'Scope and acceptance',
      p: [
        'These terms govern your use of the Souffle app and its online dictation service, and the Souffle Pro subscription. By creating an account, you accept them. If you do not accept them, do not use Souffle.',
        'Google Play’s terms also apply to the download and to payment. How your data is handled is described in Souffle’s privacy policy, at galernestudio.com/privacy/souffle.',
      ],
    },
    {
      h: 'The service',
      p: [
        'Souffle turns your voice into text and types it into the other apps on your phone. The service works online: your recordings are sent to our server and processed by artificial intelligence services (speech recognition, then light editing: removing hesitations, punctuation, paragraphs). It needs an internet connection, Android’s Accessibility service and access to the microphone.',
        'Automatic speech recognition and editing can make mistakes. Always read the text before sending it. Souffle is not designed for uses where a mistake could have serious consequences (emergencies, medical instructions, legal documents) without proofreading.',
      ],
    },
    {
      h: 'Your account',
      p: [
        'A Souffle account is created with your Google account. It is personal: you may not share or resell it. You are responsible for access to the devices you are signed in on.',
        'You can delete your account at any time from the app (Settings > Delete account). Deleting your account does not cancel a running subscription: cancel it first in Google Play.',
      ],
    },
    {
      h: 'Free plan',
      p: [
        `The free plan lets you dictate up to ${l.freeWords} words and 1 hour of recordings per week. The counter resets every Monday at 00:00 UTC. When the limit is reached, dictation pauses until the next Monday, or until you upgrade to Pro.`,
        'We may change the free plan. Any reduction will be announced in the app at least 30 days in advance.',
      ],
    },
    {
      h: 'Souffle Pro',
      p: [
        `Souffle Pro is a monthly subscription with unlimited dictation, under fair use (see below). It costs ${l.price} per month including VAT in France; the price for your country, taxes included, is shown by Google Play before you confirm.`,
        'Payment is handled by Google Play. The subscription renews automatically every month at the same price until you cancel. You can cancel at any time, in a few taps, in Google Play (Payments & subscriptions > Subscriptions) or from the Manage button in the app. Cancellation takes effect at the end of the period already paid: Pro stays active until then, and a started month is not refunded, except where the law or Google Play provide otherwise.',
        'If a payment fails, Google Play gives you up to 7 days to update your payment method, during which Pro stays active.',
        'If the price goes up, Google Play will tell you in advance and ask for your agreement, or let you cancel at no cost before it applies. Launch or trial offers may be available; their conditions are shown before purchase.',
      ],
    },
    {
      h: 'Fair use',
      id: 'fair-use',
      p: [
        'Souffle Pro is unlimited for personal use, even heavy use. To protect the service from automated use and abuse, a fair-use ceiling applies:',
      ],
      ul: [
        `${l.proWords} words and 8 hours of recordings per week, about 1h30 of speech every day. Someone dictating normally never reaches it.`,
        'If you reach it, dictation pauses until the next Monday. The app tells you, and your subscription is neither suspended nor charged more.',
        `If your personal use justifies it, write to ${p.email} and we will raise your ceiling.`,
      ],
    },
    {
      h: 'Right of withdrawal',
      id: 'withdrawal',
      p: [
        'You have 14 days from subscribing to withdraw, without giving a reason. By subscribing, you ask for Souffle Pro to start immediately. If you withdraw, you are refunded, minus an amount proportionate to the period already elapsed (article L221-25 of the French Consumer Code).',
        `To withdraw, request a refund in Google Play (play.google.com > Order history) or send us a clear statement at ${p.email}, for example: “I hereby give notice that I withdraw from my contract for the Souffle Pro subscription taken out on [date], account [email address], Google Play order number [GPA.…].” We refund you within 14 days using the payment method you used.`,
      ],
    },
    {
      h: 'Acceptable use',
      p: ['You agree not to:'],
      ul: [
        'access the service other than through the Souffle app (scripts, bots, direct calls to our server);',
        'share, resell or rent your account or subscription;',
        'bypass the limits, security measures or technical measures of the app, or copy, modify or decompile it;',
        'use Souffle to produce unlawful content, or to harass, threaten or deceive others.',
      ],
    },
    {
      h: 'Your content',
      p: [
        'What you dictate belongs to you. We do not keep it, and we only use it for the time needed to turn it into text for you. You remain responsible for the texts you send with Souffle.',
      ],
    },
    {
      h: 'Availability and changes',
      p: [
        'Souffle depends on the internet, Google Play and our AI providers. We do our best to keep the service available, but cannot guarantee uninterrupted operation or compatibility with every app, keyboard or phone. A prolonged outage of Souffle Pro caused by us entitles you, on request, to a proportionate gesture.',
        'We may change Souffle (fixes, new features, change of provider) and provide the updates needed to keep it in conformity for the duration of your subscription.',
      ],
    },
    {
      h: 'Statutory guarantees and liability',
      p: [
        'You benefit from the statutory guarantee of conformity for digital content and services (articles L224-25-12 and following of the French Consumer Code). If something is defective, write to us: we will aim to fix it within a reasonable time, or otherwise refund you.',
        'Subject to these guarantees, we are not liable for a text sent without proofreading or for indirect damage. Nothing in these terms limits our liability for gross negligence or wilful misconduct, or where the law does not allow it.',
      ],
    },
    {
      h: 'Suspension and ending',
      p: [
        'You can stop using Souffle at any time and delete your account from the app.',
        'In case of a serious breach of these terms (automated access, resale, fraud, bypassing the limits), we may suspend or close the account, after warning you by email and giving you a chance to respond, except in an emergency for the security of the service. The unused part of a subscription is refunded if the closure does not result from such a breach.',
      ],
    },
    {
      h: 'Intellectual property',
      p: [`The app, its code, name, logo and content belong to ${p.trade} unless stated otherwise (open-source licences, listed in Settings > Open-source licenses).`],
    },
    {
      h: 'Changes to these terms',
      p: [
        'We may change these terms. The new version is published on this page with its date. For a significant change affecting Souffle Pro, we will tell you in the app at least 30 days in advance; you can then cancel at no cost.',
      ],
    },
    {
      h: 'Complaints, mediation and governing law',
      p: [
        `For any complaint, write to ${p.email}. We reply within 7 working days.`,
        `If we cannot resolve it, you can refer the matter free of charge to our consumer mediator: ${p.mediator.name}, ${p.mediator.url}.`,
        'These terms are governed by French law. If you are a consumer in another EU country, you keep the protection of the mandatory rules of your country of residence and may bring a claim before its courts.',
      ],
    },
  ];
}
