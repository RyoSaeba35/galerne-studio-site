import type { Lang } from './apps';

export interface Section { h: string; p?: string[]; ul?: string[] }
export interface Policy { updated: string; sections: Record<Lang, Section[]> }

// Shared blocks -------------------------------------------------------------

const controller = {
  en: {
    h: 'Who is responsible',
    p: [
      'The data controller is Pierre Libran, sole trader (entrepreneur individuel) trading as Galerne Studio, [ADDRESS], France. Contact: contact@galernestudio.com.',
    ],
  },
  fr: {
    h: 'Responsable du traitement',
    p: [
      'Le responsable du traitement est Pierre Libran, entrepreneur individuel exerçant sous le nom commercial Galerne Studio, [ADRESSE], France. Contact : contact@galernestudio.com.',
    ],
  },
};

const rights = {
  en: {
    h: 'Your rights',
    p: [
      'Under the GDPR you have the right to access, correct and delete your personal data, to object to or restrict its processing, to data portability, and to withdraw your consent at any time. Most data stays on your device, so uninstalling the app deletes it.',
      'To exercise your rights, write to contact@galernestudio.com. You can also lodge a complaint with the French data protection authority, the CNIL (www.cnil.fr).',
    ],
  },
  fr: {
    h: 'Vos droits',
    p: [
      'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment. La plupart des données restent sur votre appareil : désinstaller l’application les supprime.',
      'Pour exercer vos droits, écrivez à contact@galernestudio.com. Vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).',
    ],
  },
};

const ads = {
  en: {
    h: 'Advertising',
    p: [
      'The app shows ads served by Google AdMob. When you first open the app, a consent form lets you choose whether ads can be personalised.',
      'With your consent, Google may use your device’s advertising ID, IP address, approximate location and interactions with ads to show personalised ads and measure their performance. Without consent, Google shows non-personalised ads and uses limited data for frequency capping, fraud prevention and aggregated reporting.',
      'You can change your choice at any time from the privacy options in the app, and reset or delete your advertising ID in your Android settings. Google’s processing is described at policies.google.com/technologies/partner-sites.',
    ],
  },
  fr: {
    h: 'Publicité',
    p: [
      'L’application affiche des publicités diffusées par Google AdMob. À la première ouverture, un formulaire de consentement vous permet de choisir si les publicités peuvent être personnalisées.',
      'Avec votre consentement, Google peut utiliser l’identifiant publicitaire de votre appareil, votre adresse IP, votre localisation approximative et vos interactions avec les publicités pour afficher des publicités personnalisées et en mesurer les performances. Sans consentement, Google affiche des publicités non personnalisées et utilise des données limitées pour plafonner leur fréquence, lutter contre la fraude et produire des statistiques agrégées.',
      'Vous pouvez modifier votre choix à tout moment depuis les options de confidentialité de l’application, et réinitialiser ou supprimer votre identifiant publicitaire dans les réglages Android. Le traitement effectué par Google est décrit sur policies.google.com/technologies/partner-sites.',
    ],
  },
};

const changes = {
  en: { h: 'Changes', p: ['If this policy changes, the new version will be published on this page with an updated date.'] },
  fr: { h: 'Modifications', p: ['En cas de modification, la nouvelle version sera publiée sur cette page avec une date mise à jour.'] },
};

// Policies ------------------------------------------------------------------

export const policies: Record<string, Policy> = {
  fidele: {
    updated: '2026-10-25',
    sections: {
      en: [
        controller.en,
        {
          h: 'Your cards stay on your phone',
          p: ['Fidèle has no account and no server. The cards you add (store name, card number, barcode format, colour, photo and store website) are stored only on your device. We never receive them.'],
        },
        {
          h: 'Camera',
          p: ['The camera is used only to scan barcodes and QR codes, and to take a card photo if you choose to. Scanning happens on the device. Photos are stored locally with the card.'],
        },
        {
          h: 'Store logos',
          p: ['When you enter a store’s website, the app downloads its logo from Google’s favicon service. This request sends the website name and your IP address to Google. No card number or other card data is sent.'],
        },
        ads.en,
        {
          h: 'Backups',
          p: ['The export feature creates a backup file of your cards and opens your phone’s share menu. Where that file goes is your choice; we never receive it.'],
        },
        {
          h: 'Children',
          p: ['Fidèle is not directed at children.'],
        },
        rights.en,
        changes.en,
      ],
      fr: [
        controller.fr,
        {
          h: 'Vos cartes restent sur votre téléphone',
          p: ['Fidèle n’a ni compte ni serveur. Les cartes que vous ajoutez (nom de l’enseigne, numéro, format du code-barres, couleur, photo et site de l’enseigne) sont stockées uniquement sur votre appareil. Nous ne les recevons jamais.'],
        },
        {
          h: 'Appareil photo',
          p: ['L’appareil photo sert uniquement à scanner les codes-barres et QR codes, et à photographier une carte si vous le souhaitez. Le scan est réalisé sur l’appareil. Les photos sont stockées localement avec la carte.'],
        },
        {
          h: 'Logos des enseignes',
          p: ['Lorsque vous indiquez le site web d’une enseigne, l’application télécharge son logo via le service de favicons de Google. Cette requête transmet le nom du site et votre adresse IP à Google. Aucun numéro de carte ni autre donnée de carte n’est envoyé.'],
        },
        ads.fr,
        {
          h: 'Sauvegardes',
          p: ['La fonction d’export crée un fichier de sauvegarde de vos cartes et ouvre le menu de partage du téléphone. Vous choisissez où envoyer ce fichier ; nous ne le recevons jamais.'],
        },
        {
          h: 'Enfants',
          p: ['Fidèle ne s’adresse pas aux enfants.'],
        },
        rights.fr,
        changes.fr,
      ],
    },
  },
  'kotoba-ciphers': {
    updated: '2026-10-25',
    sections: {
      en: [
        controller.en,
        {
          h: 'Gameplay data',
          p: ['Kotoba Ciphers has no account. Your progress, scores, best times, achievements and settings are stored only on your device. Puzzles work offline and we never receive your game data.'],
        },
        ads.en,
        {
          h: 'Children',
          p: ['Kotoba Ciphers is not directed at children under 13.'],
        },
        rights.en,
        changes.en,
      ],
      fr: [
        controller.fr,
        {
          h: 'Données de jeu',
          p: ['Kotoba Ciphers n’a pas de compte. Votre progression, vos scores, meilleurs temps, succès et réglages sont stockés uniquement sur votre appareil. Les énigmes fonctionnent hors ligne et nous ne recevons jamais vos données de jeu.'],
        },
        ads.fr,
        {
          h: 'Enfants',
          p: ['Kotoba Ciphers ne s’adresse pas aux enfants de moins de 13 ans.'],
        },
        rights.fr,
        changes.fr,
      ],
    },
  },
};
