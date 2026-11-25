import type { Lang } from './apps';
import type { Section } from './privacy';
import { publisher as p } from './publisher';

/**
 * Terms of use for Plume (Kikitori in ja/ko/zh): offline transcription, a free tier with a
 * per-file limit, and Plume Pro sold through Google Play (monthly, yearly with free trial,
 * or lifetime). Keep the numbers in sync with the app (freeLimitMinutes) and the Play Console.
 */
export const plumeLimits = {
  freeMinutes: 15,
  monthly: '€3.99',
  monthlyFr: '3,99 €',
  yearly: '€24.99',
  yearlyFr: '24,99 €',
  lifetime: '€89',
  lifetimeFr: '89 €',
  trialDays: 3,
};

const l = plumeLimits;

export function plumeTerms(lang: Lang): Section[] {
  if (lang === 'fr') {
    return [
      {
        h: 'Éditeur',
        p: [
          `Plume (appelée Kikitori en japonais, coréen et chinois) est éditée par ${p.name}, entrepreneur individuel (micro-entreprise) exerçant sous le nom commercial ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact : ${p.email}.`,
          `${p.trade} agit en qualité de professionnel. Nous nous engageons à ne proposer que des produits et services conformes au droit de l’Union européenne et au droit français.`,
        ],
      },
      {
        h: 'Objet et acceptation',
        p: [
          'Les présentes conditions encadrent l’utilisation de l’application Plume, distribuée sur Google Play, et de Plume Pro. En installant ou en utilisant l’application, vous les acceptez. Si vous ne les acceptez pas, n’utilisez pas Plume.',
          'Les conditions de Google Play s’appliquent aussi au téléchargement et au paiement. Le traitement de vos données est décrit dans la politique de confidentialité de Plume, sur galernestudio.com/fr/privacy/plume.',
          'Plume est destinée aux personnes âgées de 13 ans et plus. Si vous avez moins de 18 ans, utilisez l’application avec l’accord d’un parent ou d’un tuteur, en particulier avant tout achat.',
        ],
      },
      {
        h: 'Le service',
        p: [
          'Plume transforme des enregistrements audio et vidéo en texte. La transcription se fait entièrement sur votre téléphone : vos enregistrements et vos transcriptions ne sont jamais envoyés, ni à nous ni à personne. Internet sert uniquement à télécharger les modèles de reconnaissance vocale et à acheter Plume Pro via Google Play.',
          'La reconnaissance vocale automatique peut comporter des erreurs, en particulier avec du bruit, plusieurs personnes qui parlent en même temps, des accents marqués ou un vocabulaire spécialisé. Relisez toujours une transcription avant de vous en servir. Plume n’est pas conçue pour produire, sans relecture, un texte faisant foi (procès-verbal, document juridique ou médical).',
          'La vitesse de transcription dépend de votre téléphone, du modèle choisi et de la durée du fichier. Les modèles occupent de l’espace de stockage (de quelques centaines de Mo à près de 700 Mo chacun), et chaque heure d’audio enregistrée environ 115 Mo.',
        ],
      },
      {
        h: 'Enregistrer d’autres personnes',
        p: [
          'Vous êtes seul responsable de ce que vous enregistrez et importez. Avant d’enregistrer une conversation, un cours, une réunion ou un entretien, obtenez l’accord des personnes concernées lorsque la loi ou le règlement du lieu l’exige. Enregistrer ou diffuser les paroles d’une personne à son insu peut être illégal.',
        ],
      },
      {
        h: 'Offre gratuite',
        p: [
          `L’offre gratuite comprend un modèle de reconnaissance vocale, choisi selon la langue de votre téléphone, et la transcription des ${l.freeMinutes} premières minutes de chaque fichier. Au-delà, la transcription s’arrête et vous pouvez passer à Pro pour transcrire le fichier en entier. L’enregistrement, l’import, la recherche, la modification et l’export en TXT sont inclus.`,
          'Nous pouvons faire évoluer l’offre gratuite. Une réduction ne s’applique qu’aux nouvelles versions de l’application et sera indiquée dans ses notes de version.',
        ],
      },
      {
        h: 'Plume Pro',
        p: [
          'Plume Pro débloque tous les modèles, la transcription sans limite de durée, les exports SRT, VTT et DOCX, et l’import de plusieurs fichiers à la fois. Plume Pro est proposée de trois façons :',
        ],
        ul: [
          `un abonnement mensuel, ${l.monthlyFr} par mois ;`,
          `un abonnement annuel, ${l.yearlyFr} par an, avec ${l.trialDays} jours d’essai gratuit lors d’une première souscription ;`,
          `un achat unique « à vie », ${l.lifetimeFr}, sans renouvellement.`,
        ],
      },
      {
        h: 'Prix, paiement et renouvellement',
        id: 'billing',
        p: [
          'Les prix indiqués sont TTC en France. Le prix applicable dans votre pays, taxes comprises, est affiché par Google Play avant la validation. Le paiement est traité par Google Play : nous ne voyons jamais vos coordonnées bancaires.',
          `Essai gratuit : pendant les ${l.trialDays} jours d’essai, vous ne payez rien. Sauf résiliation avant la fin de l’essai, l’abonnement annuel démarre automatiquement et le premier paiement est prélevé. L’essai n’est proposé qu’une fois par compte Google.`,
          'Les abonnements se renouvellent automatiquement, au même prix et pour la même durée, jusqu’à ce que vous les résiliiez. Vous pouvez résilier à tout moment, en quelques clics, dans Google Play (Paiements et abonnements > Abonnements) ou depuis Paramètres > Gérer l’abonnement dans l’application. La résiliation prend effet à la fin de la période déjà payée : Pro reste actif jusque-là, et une période entamée n’est pas remboursée, sauf dans les cas prévus par la loi, par ces conditions ou par Google Play.',
          'Si un paiement échoue, Google Play peut vous laisser un délai pour mettre à jour votre moyen de paiement, pendant lequel Pro reste actif.',
          'En cas de hausse de prix d’un abonnement, Google Play vous prévient à l’avance et vous demande votre accord, ou vous permet de résilier sans frais avant son application.',
          'L’achat à vie donne accès à Plume Pro aussi longtemps que l’application est proposée et reste compatible avec votre téléphone, sur les appareils associés au compte Google utilisé pour l’achat. Il ne couvre pas d’autres applications.',
          'Plume vérifie auprès de Google Play, sur votre téléphone, que vous possédez Pro. Après une réinstallation ou sur un nouveau téléphone, connectez le même compte Google pour retrouver votre achat.',
        ],
      },
      {
        h: 'Droit de rétractation',
        id: 'withdrawal',
        p: [
          'Vous disposez de 14 jours à compter de l’achat pour vous rétracter, sans avoir à vous justifier.',
        ],
        ul: [
          'Abonnement : en souscrivant, vous demandez que Plume Pro commence immédiatement. Si vous vous rétractez, vous êtes remboursé, déduction faite d’un montant proportionnel à la période déjà écoulée (article L221-25 du Code de la consommation). Si vous résiliez pendant l’essai gratuit, rien ne vous est facturé.',
          'Achat à vie : vous êtes remboursé intégralement si vous le demandez dans les 14 jours suivant l’achat.',
        ],
      },
      {
        h: 'Comment se rétracter',
        p: [
          `Demandez un remboursement dans Google Play (play.google.com > Historique des commandes) ou envoyez-nous une déclaration claire à ${p.email}, par exemple : « Je vous notifie par la présente ma rétractation du contrat portant sur Plume Pro acheté le [date], numéro de commande Google Play [GPA.…]. » Nous vous remboursons sous 14 jours par le moyen de paiement utilisé. Après un remboursement, Plume Pro est désactivé.`,
        ],
      },
      {
        h: 'Licence d’utilisation',
        p: [
          'Nous vous accordons une licence personnelle, non exclusive et non cessible pour utiliser Plume sur vos appareils. Vous pouvez utiliser les transcriptions comme vous le souhaitez, y compris dans votre travail.',
          'Vous vous engagez à ne pas copier, modifier, décompiler ou redistribuer l’application, à ne pas contourner ses limites ou ses mesures techniques (y compris la vérification de Plume Pro), ni à revendre ou partager un accès Pro en dehors de ce que permet Google Play.',
        ],
      },
      {
        h: 'Vos contenus et vos données',
        p: [
          'Vos enregistrements et transcriptions vous appartiennent. Ils restent dans le stockage privé de l’application, sur votre téléphone : nous n’y avons pas accès et ne pouvons pas les récupérer pour vous.',
          'Vous êtes donc responsable de leur sauvegarde. Désinstaller l’application, effacer ses données ou changer de téléphone efface tout ce qu’elle contient. Exportez les transcriptions et enregistrements que vous souhaitez garder.',
        ],
      },
      {
        h: 'Modèles de reconnaissance vocale',
        p: [
          'Les modèles sont des logiciels libres développés par des tiers, distribués sous leurs propres licences (visibles dans l’application), et téléchargés depuis Hugging Face et GitHub. Nous ne contrôlons pas ces services : un téléchargement peut être lent ou momentanément indisponible. Une fois téléchargé, un modèle fonctionne sans internet.',
          'Nous pouvons ajouter, mettre à jour ou remplacer des modèles. Si un modèle compris dans Pro est retiré, nous proposerons un modèle équivalent pour les langues concernées.',
        ],
      },
      {
        h: 'Mises à jour et disponibilité',
        p: [
          'Nous pouvons faire évoluer l’application (corrections, nouvelles fonctions, nouveaux modèles). Nous fournissons les mises à jour nécessaires pour qu’elle reste conforme pendant la durée de votre abonnement, ou, pour l’achat à vie, pendant la durée à laquelle vous pouvez raisonnablement vous attendre. Nous ne garantissons pas un fonctionnement sur tous les téléphones ni avec tous les formats de fichier.',
        ],
      },
      {
        h: 'Garanties légales et responsabilité',
        p: [
          'Vous bénéficiez de la garantie légale de conformité applicable aux contenus et services numériques (articles L224-25-12 et suivants du Code de la consommation). En cas de défaut, écrivez-nous : nous chercherons à le corriger dans un délai raisonnable, ou à défaut vous rembourserons.',
          'Sous réserve de ces garanties, notre responsabilité ne peut être engagée pour une erreur de transcription utilisée sans relecture, pour une perte de données que vous auriez pu éviter en exportant vos fichiers, ni pour les dommages indirects. Rien dans ces conditions ne limite notre responsabilité en cas de faute lourde ou intentionnelle, ou lorsque la loi l’interdit.',
        ],
      },
      {
        h: 'Propriété intellectuelle',
        p: [`L’application, son code, ses noms (Plume, Kikitori), son logo et ses contenus appartiennent à ${p.trade}, sauf mention contraire (modèles de reconnaissance vocale et logiciels libres, dont les licences sont visibles dans l’application).`],
      },
      {
        h: 'Modification et fin',
        p: [
          'Nous pouvons modifier ces conditions. La nouvelle version est publiée sur cette page avec sa date. Pour un changement important touchant Plume Pro, nous vous prévenons dans l’application au moins 30 jours à l’avance ; si vous êtes abonné, vous pouvez alors résilier sans frais.',
          'Vous pouvez cesser d’utiliser Plume à tout moment en la désinstallant. Pensez à résilier votre abonnement dans Google Play : la désinstallation ne le résilie pas.',
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
        `Plume (called Kikitori in Japanese, Korean and Chinese) is published by ${p.name}, sole trader (micro-entreprise) trading as ${p.trade}, SIRET ${p.siret}, ${p.address}. Contact: ${p.email}.`,
        `${p.trade} acts as a trader. We commit to only offer products and services that comply with European Union and French law.`,
      ],
    },
    {
      h: 'Scope and acceptance',
      p: [
        'These terms govern your use of the Plume app, distributed on Google Play, and of Plume Pro. By installing or using the app, you accept them. If you do not accept them, do not use Plume.',
        'Google Play’s terms also apply to the download and to payment. How your data is handled is described in Plume’s privacy policy, at galernestudio.com/privacy/plume.',
        'Plume is intended for people aged 13 and over. If you are under 18, use the app with the agreement of a parent or guardian, especially before making a purchase.',
      ],
    },
    {
      h: 'The service',
      p: [
        'Plume turns audio and video recordings into text. Transcription runs entirely on your phone: your recordings and transcripts are never sent to us or to anyone else. The internet is used only to download speech recognition models and to buy Plume Pro through Google Play.',
        'Automatic speech recognition can make mistakes, especially with background noise, several people speaking at once, strong accents or specialised vocabulary. Always read a transcript before relying on it. Plume is not designed to produce, without proofreading, an authoritative record (official minutes, legal or medical documents).',
        'Transcription speed depends on your phone, the model you choose and the length of the file. Models take up storage space (from a few hundred MB to nearly 700 MB each), and each hour of recorded audio about 115 MB.',
      ],
    },
    {
      h: 'Recording other people',
      p: [
        'You alone are responsible for what you record and import. Before recording a conversation, lecture, meeting or interview, get the consent of the people involved where the law or the rules of the venue require it. Recording or sharing someone’s words without their knowledge may be unlawful.',
      ],
    },
    {
      h: 'Free plan',
      p: [
        `The free plan includes one speech recognition model, chosen from your phone’s language, and transcription of the first ${l.freeMinutes} minutes of each file. Past that, transcription stops and you can upgrade to Pro to transcribe the whole file. Recording, importing, search, editing and TXT export are included.`,
        'We may change the free plan. A reduction only applies to new versions of the app and will be stated in its release notes.',
      ],
    },
    {
      h: 'Plume Pro',
      p: [
        'Plume Pro unlocks all models, transcription with no length limit, SRT, VTT and DOCX export, and importing several files at once. Plume Pro is offered in three ways:',
      ],
      ul: [
        `a monthly subscription, ${l.monthly} per month;`,
        `a yearly subscription, ${l.yearly} per year, with a ${l.trialDays}-day free trial the first time you subscribe;`,
        `a one-time “lifetime” purchase, ${l.lifetime}, with no renewal.`,
      ],
    },
    {
      h: 'Price, payment and renewal',
      id: 'billing',
      p: [
        'Prices shown include VAT in France. The price for your country, taxes included, is shown by Google Play before you confirm. Payment is handled by Google Play: we never see your payment details.',
        `Free trial: you pay nothing during the ${l.trialDays}-day trial. Unless you cancel before it ends, the yearly subscription starts automatically and the first payment is taken. The trial is offered once per Google account.`,
        'Subscriptions renew automatically, at the same price and for the same period, until you cancel. You can cancel at any time, in a few taps, in Google Play (Payments & subscriptions > Subscriptions) or from Settings > Manage subscription in the app. Cancellation takes effect at the end of the period already paid: Pro stays active until then, and a started period is not refunded, except where the law, these terms or Google Play provide otherwise.',
        'If a payment fails, Google Play may give you time to update your payment method, during which Pro stays active.',
        'If the price of a subscription goes up, Google Play will tell you in advance and ask for your agreement, or let you cancel at no cost before it applies.',
        'The lifetime purchase gives access to Plume Pro for as long as the app is offered and remains compatible with your phone, on the devices linked to the Google account used for the purchase. It does not cover other apps.',
        'Plume checks with Google Play, on your phone, that you own Pro. After reinstalling or on a new phone, sign in with the same Google account to get your purchase back.',
      ],
    },
    {
      h: 'Right of withdrawal',
      id: 'withdrawal',
      p: ['You have 14 days from purchase to withdraw, without giving a reason.'],
      ul: [
        'Subscription: by subscribing, you ask for Plume Pro to start immediately. If you withdraw, you are refunded, minus an amount proportionate to the period already elapsed (article L221-25 of the French Consumer Code). If you cancel during the free trial, you are not charged at all.',
        'Lifetime purchase: you are refunded in full if you ask within 14 days of purchase.',
      ],
    },
    {
      h: 'How to withdraw',
      p: [
        `Request a refund in Google Play (play.google.com > Order history) or send us a clear statement at ${p.email}, for example: “I hereby give notice that I withdraw from my contract for Plume Pro bought on [date], Google Play order number [GPA.…].” We refund you within 14 days using the payment method you used. After a refund, Plume Pro is switched off.`,
      ],
    },
    {
      h: 'Licence',
      p: [
        'We grant you a personal, non-exclusive, non-transferable licence to use Plume on your devices. You may use your transcripts however you like, including for work.',
        'You agree not to copy, modify, decompile or redistribute the app, not to bypass its limits or technical measures (including the Plume Pro check), and not to resell or share Pro access beyond what Google Play allows.',
      ],
    },
    {
      h: 'Your content and data',
      p: [
        'Your recordings and transcripts belong to you. They stay in the app’s private storage on your phone: we have no access to them and cannot recover them for you.',
        'You are therefore responsible for backing them up. Uninstalling the app, clearing its data or changing phones erases everything in it. Export the transcripts and recordings you want to keep.',
      ],
    },
    {
      h: 'Speech recognition models',
      p: [
        'The models are open-source software developed by third parties, distributed under their own licences (listed in the app), and downloaded from Hugging Face and GitHub. We do not control these services: a download may be slow or briefly unavailable. Once downloaded, a model works without the internet.',
        'We may add, update or replace models. If a model included in Pro is removed, we will offer an equivalent model for the languages concerned.',
      ],
    },
    {
      h: 'Updates and availability',
      p: [
        'We may change the app (fixes, new features, new models). We provide the updates needed to keep it in conformity for the duration of your subscription or, for the lifetime purchase, for as long as you can reasonably expect. We do not guarantee operation on every phone or with every file format.',
      ],
    },
    {
      h: 'Statutory guarantees and liability',
      p: [
        'You benefit from the statutory guarantee of conformity for digital content and services (articles L224-25-12 and following of the French Consumer Code). If something is defective, write to us: we will aim to fix it within a reasonable time, or otherwise refund you.',
        'Subject to these guarantees, we are not liable for a transcription error used without proofreading, for loss of data you could have avoided by exporting your files, or for indirect damage. Nothing in these terms limits our liability for gross negligence or wilful misconduct, or where the law does not allow it.',
      ],
    },
    {
      h: 'Intellectual property',
      p: [`The app, its code, names (Plume, Kikitori), logo and content belong to ${p.trade} unless stated otherwise (speech recognition models and open-source software, whose licences are listed in the app).`],
    },
    {
      h: 'Changes and ending',
      p: [
        'We may change these terms. The new version is published on this page with its date. For a significant change affecting Plume Pro, we will tell you in the app at least 30 days in advance; if you subscribe, you can then cancel at no cost.',
        'You can stop using Plume at any time by uninstalling it. Remember to cancel your subscription in Google Play: uninstalling does not cancel it.',
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
