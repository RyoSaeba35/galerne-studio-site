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
      'The app shows ads from two sources: Unity LevelPlay, an ad mediation service operated by Unity Technologies that selects ads from several advertising networks, and Galerne Studio’s own ad server, which promotes our apps and partner offers.',
      'When you first open the app, a consent form lets you choose whether ads can be personalised. With your consent, LevelPlay and its partner networks may use your device’s advertising ID, IP address, approximate location, device information and interactions with ads to personalise ads and measure their performance. Without consent, ads are not personalised, and limited data is still used for frequency capping, fraud prevention and aggregated reporting.',
      'Our own ad server receives the app name and ad placement with each request, and sees your IP address as part of the network connection. It counts impressions and clicks per ad and does not build a profile of you. Ad images are downloaded from our storage provider.',
      'The app reads your advertising ID on the device only to recognise our own test devices. It is never sent to us.',
      'You can change your consent choice at any time from the privacy options in the app, and reset or delete your advertising ID in your Android settings. Unity’s privacy policy: unity.com/legal/game-player-and-app-user-privacy-policy.',
    ],
  },
  fr: {
    h: 'Publicité',
    p: [
      'L’application affiche des publicités provenant de deux sources : Unity LevelPlay, un service de médiation publicitaire exploité par Unity Technologies qui sélectionne des annonces auprès de plusieurs régies, et le serveur publicitaire de Galerne Studio, qui fait la promotion de nos applications et d’offres partenaires.',
      'À la première ouverture, un formulaire de consentement vous permet de choisir si les publicités peuvent être personnalisées. Avec votre consentement, LevelPlay et ses régies partenaires peuvent utiliser l’identifiant publicitaire de votre appareil, votre adresse IP, votre localisation approximative, des informations sur l’appareil et vos interactions avec les publicités pour les personnaliser et en mesurer les performances. Sans consentement, les publicités ne sont pas personnalisées, et des données limitées restent utilisées pour plafonner leur fréquence, lutter contre la fraude et produire des statistiques agrégées.',
      'Notre propre serveur publicitaire reçoit, à chaque requête, le nom de l’application et l’emplacement publicitaire, et voit votre adresse IP du fait de la connexion réseau. Il compte les affichages et les clics par publicité et ne constitue aucun profil vous concernant. Les images publicitaires sont téléchargées depuis notre prestataire de stockage.',
      'L’application lit votre identifiant publicitaire sur l’appareil uniquement pour reconnaître nos propres appareils de test. Il ne nous est jamais transmis.',
      'Vous pouvez modifier votre choix à tout moment depuis les options de confidentialité de l’application, et réinitialiser ou supprimer votre identifiant publicitaire dans les réglages Android. Politique de confidentialité de Unity : unity.com/legal/game-player-and-app-user-privacy-policy.',
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
  kioku: {
    updated: '2026-10-29',
    sections: {
      en: [
        controller.en,
        {
          h: 'Your progress stays on your phone',
          p: ['Kioku has no account and no server for game data. Your progress, scores, statistics and settings (such as your language) are stored only on your device. We never receive them. Kioku never asks for your name, email address, age or any other personal information.'],
        },
        {
          h: 'Permissions',
          p: ['Kioku only needs internet access, to load ads. It does not use the camera, microphone, contacts, photos or location.'],
        },
        {
          h: 'Advertising',
          p: [
            'Kioku is free and shows ads from two sources: Unity LevelPlay, an ad mediation service operated by Unity Technologies that selects ads from several advertising networks, and Galerne Studio’s own ad server, which promotes our apps and partner offers.',
            'Kioku is made for players of all ages, including children. For this reason, all ads in Kioku are non-personalised and limited to content suitable for a general audience. Ad requests are marked as directed at children, and we only use ad networks that take part in Google Play’s Families program. LevelPlay and its partner networks may still process limited technical data, such as your IP address, device type and operating system version, to deliver ads, limit how often the same ad is shown, prevent fraud and produce aggregated reports. This data is not used to build an advertising profile.',
            'Where the law requires it, a consent form is shown when you first open the app. You can change your choice at any time in Settings, under Ad privacy choices.',
            'Our own ad server receives the app name and ad placement with each request, and sees your IP address as part of the network connection. It counts impressions and clicks per ad and does not build a profile of you. Ad images are downloaded from our storage provider.',
            'Kioku does not collect your advertising ID. Unity’s privacy policy: unity.com/legal/game-player-and-app-user-privacy-policy.',
          ],
        },
        {
          h: 'Tips',
          p: ['You can choose to leave a tip to support the app. Payments are handled entirely by Google Play under Google’s privacy policy. We only receive confirmation that the purchase went through; we never see your payment details.'],
        },
        {
          h: 'Children',
          p: ['Kioku is designed for players of all ages, including children. We do not knowingly collect personal information from children: there is no account, no chat, no sharing between players, and game data stays on the device. If you are a parent and have a question, write to contact@galernestudio.com.'],
        },
        rights.en,
        changes.en,
      ],
      fr: [
        controller.fr,
        {
          h: 'Votre progression reste sur votre téléphone',
          p: ['Kioku n’a ni compte ni serveur pour les données de jeu. Votre progression, vos scores, vos statistiques et vos réglages (comme la langue) sont enregistrés uniquement sur votre appareil. Nous ne les recevons jamais. Kioku ne demande jamais votre nom, votre adresse e-mail, votre âge ni aucune autre information personnelle.'],
        },
        {
          h: 'Autorisations',
          p: ['Kioku a seulement besoin d’un accès à Internet, pour charger les publicités. L’application n’utilise ni l’appareil photo, ni le micro, ni les contacts, ni les photos, ni la localisation.'],
        },
        {
          h: 'Publicité',
          p: [
            'Kioku est gratuit et affiche des publicités provenant de deux sources : Unity LevelPlay, un service de médiation publicitaire exploité par Unity Technologies qui sélectionne des annonces auprès de plusieurs régies, et le serveur publicitaire de Galerne Studio, qui fait la promotion de nos applications et d’offres partenaires.',
            'Kioku s’adresse aux joueurs de tous âges, y compris aux enfants. C’est pourquoi toutes les publicités de Kioku sont non personnalisées et limitées à des contenus adaptés à tous les publics. Les demandes de publicité sont signalées comme destinées aux enfants, et nous n’utilisons que des régies participant au programme Familles de Google Play. LevelPlay et ses régies partenaires peuvent tout de même traiter des données techniques limitées, comme votre adresse IP, le type d’appareil et la version du système, afin de diffuser les annonces, limiter la répétition d’une même annonce, lutter contre la fraude et produire des statistiques agrégées. Ces données ne servent pas à constituer un profil publicitaire.',
            'Lorsque la loi l’exige, un formulaire de consentement s’affiche à la première ouverture de l’application. Vous pouvez modifier votre choix à tout moment dans les Réglages, rubrique Choix de confidentialité publicitaire.',
            'Notre propre serveur publicitaire reçoit, à chaque requête, le nom de l’application et l’emplacement publicitaire, et voit votre adresse IP du fait de la connexion réseau. Il compte les affichages et les clics par publicité et ne constitue aucun profil vous concernant. Les images publicitaires sont téléchargées depuis notre prestataire de stockage.',
            'Kioku ne collecte pas votre identifiant publicitaire. Politique de confidentialité de Unity : unity.com/legal/game-player-and-app-user-privacy-policy.',
          ],
        },
        {
          h: 'Pourboires',
          p: ['Vous pouvez choisir de laisser un pourboire pour soutenir l’application. Les paiements sont entièrement gérés par Google Play, selon la politique de confidentialité de Google. Nous recevons uniquement la confirmation de l’achat ; nous ne voyons jamais vos informations de paiement.'],
        },
        {
          h: 'Enfants',
          p: ['Kioku est conçu pour les joueurs de tous âges, y compris les enfants. Nous ne collectons sciemment aucune information personnelle auprès des enfants : pas de compte, pas de messagerie, pas d’échange entre joueurs, et les données de jeu restent sur l’appareil. Si vous êtes parent et avez une question, écrivez à contact@galernestudio.com.'],
        },
        rights.fr,
        changes.fr,
      ],
    },
  },
};
