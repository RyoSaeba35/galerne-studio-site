import type { Lang } from './apps';

export interface Section { h: string; id?: string; p?: string[]; ul?: string[] }
export interface Policy { updated: string; sections: Record<Lang, Section[]> }

// Shared blocks -------------------------------------------------------------

const controller = {
  en: {
    h: 'Who is responsible',
    p: [
      'The data controller is Pierre Libran, sole trader (entrepreneur individuel) trading as Galerne Studio, 23 rue Dumenge, 69004 Lyon, France. Contact: contact@galernestudio.com.',
    ],
  },
  fr: {
    h: 'Responsable du traitement',
    p: [
      'Le responsable du traitement est Pierre Libran, entrepreneur individuel exerçant sous le nom commercial Galerne Studio, 23 rue Dumenge, 69004 Lyon, France. Contact : contact@galernestudio.com.',
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
  souffle: {
    updated: '2026-11-10',
    sections: {
      en: [
        controller.en,
        {
          h: 'In short',
          ul: [
            'Your voice is recorded only after you tap the capsule, and at most for 2 minutes.',
            'Your recordings and texts are never stored: not on our server, not in our logs, and they are never used to train AI models.',
            'We keep only what an account needs: your Google account ID, your email address, your plan and a weekly word counter.',
            'No ads, no analytics, no tracking in the app.',
            'You can delete your account and its data at any time from the app.',
          ],
        },
        {
          h: 'What Souffle does',
          p: [
            'Souffle is a voice dictation app. When you tap the Souffle capsule while typing in another app, it records your voice, sends the recording to the Souffle server, which turns it into clean text with two AI services (speech recognition, then light editing), and types the result into the text field you are using.',
          ],
        },
        {
          h: 'Your account',
          p: [
            'You sign in with your Google account. Google sends us your Google account ID and your email address. We store them, together with your plan (Free or Pro), the end date of your Pro period and a random billing identifier that links Google Play purchases to your account. We never receive your Google password.',
            'Each phone where you are signed in has a session. We store a fingerprint (SHA-256 hash) of its session token, never the token itself, and the last time it was used.',
          ],
        },
        {
          h: 'Your dictations',
          p: [
            'When you dictate, the app sends to the Souffle server: the recording, the language you chose (if any), your dictionary words (if any), and the package name of the app you are typing in (for example com.google.android.gm). The package name is only used to adapt the layout: an email is laid out as an email, a chat message stays short.',
            'The server sends the recording to Groq for speech recognition, then sends the resulting text, your dictionary words and the type of destination (email, chat or AI prompt) to the Gemini API from Google for clean-up. The clean text comes back to your phone and is typed into the field.',
            'Neither the recording nor any text is stored. The recording exists only as a temporary file for the few seconds of the request, on your phone and on the server, and is then deleted. Texts only pass through the server’s memory. None of this is written to our logs or our database.',
            'For each dictation we only count the number of words and the length of the recording, to apply the weekly limits.',
          ],
        },
        {
          h: 'The Accessibility service',
          id: 'accessibility',
          p: [
            'Souffle uses Android’s Accessibility service. It is the only way an app can show a button over other apps’ keyboards and type text into their fields. Souffle asks for it with an explanation screen, and you turn it on yourself in Android’s settings.',
            'With this service, Souffle:',
          ],
          ul: [
            'detects when a text field is selected and the keyboard is open, to show the capsule at the right place;',
            'reads which app and which keyboard are on screen, to place the capsule and adapt the layout of the text;',
            'types your dictated text into the selected field; when an app does not accept typing, Souffle reads that field’s current content on your phone only, to insert the text at the cursor;',
            'never works in password fields, never reads the rest of your screen, and never sends or stores what is on your screen or what you have typed.',
          ],
        },
        {
          h: 'Microphone and notifications',
          p: [
            'The microphone is used only while the capsule is recording, after you tap it. A notification shows that Souffle is listening. Notifications also tell you when you reach your weekly limit.',
          ],
        },
        {
          h: 'Souffle Pro and payments',
          p: [
            'Souffle Pro is sold as a subscription through Google Play, which handles the payment. We receive the purchase token, the product, the subscription state, the renewal date and whether it will renew, and check them with Google to unlock Pro. We never see your payment details. Google’s privacy policy applies to the payment: policies.google.com/privacy.',
          ],
        },
        {
          h: 'What we log',
          id: 'logging',
          p: [
            'Like every web server, ours keeps technical logs to keep the service running and secure. They contain:',
          ],
          ul: [
            'Application logs: the time, the address called (for example /v1/dictate), the response code, the processing time and a random request number. They never contain your IP address, your email address, recordings, texts, dictionary words or the app you are typing in.',
            'The web proxy in front of the server also records the IP address, the time, the address called, the response code and the technical description sent by the phone (user agent: Android version and phone model), to block attacks.',
            'All logs are deleted after 7 days at most.',
          ],
        },
        {
          h: 'Who processes your data',
          p: ['We do not sell or share your data. These providers process it on our behalf, only to run Souffle:'],
          ul: [
            'Oracle (Oracle Cloud Infrastructure): hosting of the Souffle server and database, in Marseille, France.',
            'Wasabi Technologies: storage of the nightly database backups, in Paris, France. Backups are encrypted on our server before they are sent, so Wasabi cannot read them.',
            'Groq, Inc. (United States): speech recognition of your recordings. We have enabled Groq’s zero data retention: Groq does not keep recordings or transcripts after processing.',
            'Google (Gemini API, paid service): clean-up of the transcribed text. Google does not use this data to improve its products; it keeps it for a limited period only to detect abuse and meet legal obligations.',
            'Google (Sign in with Google, Google Play): sign-in and subscription payments, under Google’s own privacy policy.',
          ],
        },
        {
          h: 'Transfers outside the EU',
          p: [
            'Groq and Google may process data in the United States. These transfers rely on the European Commission’s standard contractual clauses and, where the provider is certified, on the EU-U.S. Data Privacy Framework. You can ask us for a copy of the safeguards.',
          ],
        },
        {
          h: 'Why we process your data (legal bases)',
          ul: [
            'To provide the service you asked for (account, dictation, Pro subscription): performance of our contract with you.',
            'Weekly limits, fair use, security logs and abuse prevention: our legitimate interest in keeping Souffle working, secure and affordable.',
            'Keeping purchase records when the law requires it: legal obligation.',
          ],
        },
        {
          h: 'How long we keep it',
          ul: [
            'Recordings and texts: not kept (deleted as soon as the dictation is done).',
            'Account (Google ID, email, plan): until you delete it, or automatically after 24 months without any use, unless a Pro subscription is still active.',
            'Sessions: until you sign out, or after 12 months without use.',
            'Weekly word and audio counters: 13 weeks.',
            'Subscription records: as long as the account exists, and at most 13 months after the subscription ended.',
            'Logs: 7 days at most.',
            'Encrypted database backups (account, sessions, counters, subscriptions; never recordings or texts): 14 days.',
          ],
        },
        {
          h: 'Security',
          p: [
            'All traffic between the app and the server is encrypted (HTTPS). Session tokens are stored only as hashes. The keys of our AI providers stay on the server and are never in the app. Access to the server is limited to the publisher.',
          ],
        },
        {
          h: 'Delete your account',
          id: 'delete-account',
          p: ['You can delete your Souffle account and its data at any time:'],
          ul: [
            'In the app: Settings > Delete account. Your account, sessions, counters and subscription records are deleted immediately from our database. Logs disappear within 7 days, and encrypted backups within 14 days.',
            'Without the app: write to contact@galernestudio.com from the email address of your Souffle account, with the subject “Delete my Souffle account”. We delete it within 30 days and confirm by email.',
            'Deleting your account does not cancel a Souffle Pro subscription: cancel it first in Google Play (Payments & subscriptions > Subscriptions).',
            'Settings stored on your phone (language, dictionary, capsule position) are deleted when you uninstall Souffle.',
          ],
        },
        {
          h: 'Children',
          p: ['Souffle is not intended for children under 15.'],
        },
        {
          h: 'Your rights',
          p: [
            'Under the GDPR you have the right to access, correct and delete your personal data, to receive it in a portable format, to object to or restrict its processing, and to give instructions on what happens to it after your death. Deleting your account from the app is immediate.',
            'To exercise your rights, write to contact@galernestudio.com from your account’s email address. We reply within one month. You can also lodge a complaint with the French data protection authority, the CNIL (www.cnil.fr).',
          ],
        },
        changes.en,
      ],
      fr: [
        controller.fr,
        {
          h: 'En bref',
          ul: [
            'Votre voix n’est enregistrée qu’après avoir touché la capsule, 2 minutes au maximum.',
            'Vos enregistrements et vos textes ne sont jamais conservés : ni sur notre serveur, ni dans nos journaux, et ils ne servent jamais à entraîner des modèles d’IA.',
            'Nous gardons seulement ce qu’un compte exige : votre identifiant Google, votre adresse e-mail, votre offre et un compteur de mots par semaine.',
            'Aucune publicité, aucune mesure d’audience, aucun pistage dans l’application.',
            'Vous pouvez supprimer votre compte et ses données à tout moment depuis l’application.',
          ],
        },
        {
          h: 'Ce que fait Souffle',
          p: [
            'Souffle est une application de dictée vocale. Quand vous touchez la capsule Souffle pendant que vous écrivez dans une autre application, elle enregistre votre voix, envoie l’enregistrement au serveur Souffle, qui le transforme en texte propre grâce à deux services d’IA (reconnaissance vocale, puis mise en forme légère), et saisit le résultat dans le champ de texte que vous utilisez.',
          ],
        },
        {
          h: 'Votre compte',
          p: [
            'Vous vous connectez avec votre compte Google. Google nous transmet votre identifiant de compte Google et votre adresse e-mail. Nous les conservons, avec votre offre (Gratuite ou Pro), la date de fin de votre période Pro et un identifiant de facturation aléatoire qui relie vos achats Google Play à votre compte. Nous ne recevons jamais votre mot de passe Google.',
            'Chaque téléphone connecté dispose d’une session. Nous conservons une empreinte (hachage SHA-256) de son jeton de session, jamais le jeton lui-même, et sa date de dernière utilisation.',
          ],
        },
        {
          h: 'Vos dictées',
          p: [
            'Quand vous dictez, l’application envoie au serveur Souffle : l’enregistrement, la langue choisie (le cas échéant), les mots de votre dictionnaire (le cas échéant) et le nom technique de l’application dans laquelle vous écrivez (par exemple com.google.android.gm). Ce nom sert uniquement à adapter la mise en forme : un e-mail est présenté comme un e-mail, un message de discussion reste court.',
            'Le serveur envoie l’enregistrement à Groq pour la reconnaissance vocale, puis le texte obtenu, les mots de votre dictionnaire et le type de destination (e-mail, discussion ou prompt d’IA) à l’API Gemini de Google pour la mise en forme. Le texte propre revient sur votre téléphone et est saisi dans le champ.',
            'Ni l’enregistrement ni aucun texte n’est conservé. L’enregistrement n’existe que sous forme de fichier temporaire pendant les quelques secondes de la requête, sur votre téléphone et sur le serveur, puis il est supprimé. Les textes ne font que transiter par la mémoire du serveur. Rien de tout cela n’est écrit dans nos journaux ni dans notre base de données.',
            'Pour chaque dictée, nous comptons seulement le nombre de mots et la durée de l’enregistrement, pour appliquer les limites hebdomadaires.',
          ],
        },
        {
          h: 'Le service d’accessibilité',
          id: 'accessibility',
          p: [
            'Souffle utilise le service d’accessibilité d’Android. C’est la seule façon pour une application d’afficher un bouton sur le clavier des autres applications et de saisir du texte dans leurs champs. Souffle le demande avec un écran d’explication, et c’est vous qui l’activez dans les paramètres d’Android.',
            'Grâce à ce service, Souffle :',
          ],
          ul: [
            'détecte quand un champ de texte est sélectionné et que le clavier est ouvert, pour afficher la capsule au bon endroit ;',
            'lit quelle application et quel clavier sont à l’écran, pour placer la capsule et adapter la mise en forme du texte ;',
            'saisit votre texte dicté dans le champ sélectionné ; quand une application refuse la saisie directe, Souffle lit le contenu actuel de ce champ, sur votre téléphone uniquement, pour insérer le texte au niveau du curseur ;',
            'ne fonctionne jamais dans les champs de mot de passe, ne lit jamais le reste de votre écran, et n’envoie ni ne conserve jamais ce qui est affiché ou ce que vous avez tapé.',
          ],
        },
        {
          h: 'Micro et notifications',
          p: [
            'Le micro n’est utilisé que pendant que la capsule enregistre, après que vous l’avez touchée. Une notification indique que Souffle écoute. Les notifications vous préviennent aussi quand vous atteignez votre limite de la semaine.',
          ],
        },
        {
          h: 'Souffle Pro et paiements',
          p: [
            'Souffle Pro est vendu sous forme d’abonnement via Google Play, qui gère le paiement. Nous recevons le jeton d’achat, le produit, l’état de l’abonnement, la date de renouvellement et s’il sera renouvelé, et nous les vérifions auprès de Google pour activer Pro. Nous ne voyons jamais vos informations de paiement. La politique de confidentialité de Google s’applique au paiement : policies.google.com/privacy.',
          ],
        },
        {
          h: 'Ce que nous journalisons',
          id: 'logging',
          p: [
            'Comme tout serveur web, le nôtre tient des journaux techniques pour assurer le fonctionnement et la sécurité du service. Ils contiennent :',
          ],
          ul: [
            'Journaux de l’application : l’heure, l’adresse appelée (par exemple /v1/dictate), le code de réponse, le temps de traitement et un numéro de requête aléatoire. Ils ne contiennent jamais votre adresse IP, votre adresse e-mail, d’enregistrement, de texte, les mots de votre dictionnaire ni l’application dans laquelle vous écrivez.',
            'Le proxy web placé devant le serveur enregistre aussi l’adresse IP, l’heure, l’adresse appelée, le code de réponse et la description technique envoyée par le téléphone (user agent : version d’Android et modèle du téléphone), pour bloquer les attaques.',
            'Tous les journaux sont supprimés au bout de 7 jours au maximum.',
          ],
        },
        {
          h: 'Qui traite vos données',
          p: ['Nous ne vendons ni ne partageons vos données. Ces prestataires les traitent pour notre compte, uniquement pour faire fonctionner Souffle :'],
          ul: [
            'Oracle (Oracle Cloud Infrastructure) : hébergement du serveur et de la base de données Souffle, à Marseille, en France.',
            'Wasabi Technologies : stockage des sauvegardes nocturnes de la base de données, à Paris, en France. Les sauvegardes sont chiffrées sur notre serveur avant leur envoi : Wasabi ne peut pas les lire.',
            'Groq, Inc. (États-Unis) : reconnaissance vocale de vos enregistrements. Nous avons activé la « conservation zéro » de Groq : Groq ne garde ni les enregistrements ni les transcriptions après traitement.',
            'Google (API Gemini, service payant) : mise en forme du texte transcrit. Google n’utilise pas ces données pour améliorer ses produits ; il les conserve pendant une durée limitée, uniquement pour détecter les abus et respecter ses obligations légales.',
            'Google (Se connecter avec Google, Google Play) : connexion et paiement des abonnements, selon la politique de confidentialité de Google.',
          ],
        },
        {
          h: 'Transferts hors de l’Union européenne',
          p: [
            'Groq et Google peuvent traiter des données aux États-Unis. Ces transferts reposent sur les clauses contractuelles types de la Commission européenne et, lorsque le prestataire est certifié, sur le cadre de protection des données UE-États-Unis (Data Privacy Framework). Vous pouvez nous demander une copie de ces garanties.',
          ],
        },
        {
          h: 'Pourquoi nous traitons vos données (bases légales)',
          ul: [
            'Fournir le service que vous demandez (compte, dictée, abonnement Pro) : exécution du contrat qui nous lie.',
            'Limites hebdomadaires, usage raisonnable, journaux de sécurité et prévention des abus : notre intérêt légitime à garder Souffle fonctionnel, sûr et abordable.',
            'Conservation des justificatifs d’achat lorsque la loi l’exige : obligation légale.',
          ],
        },
        {
          h: 'Durées de conservation',
          ul: [
            'Enregistrements et textes : non conservés (supprimés dès la fin de la dictée).',
            'Compte (identifiant Google, e-mail, offre) : jusqu’à sa suppression, ou automatiquement après 24 mois sans aucune utilisation, sauf abonnement Pro encore actif.',
            'Sessions : jusqu’à la déconnexion, ou après 12 mois sans utilisation.',
            'Compteurs hebdomadaires de mots et de durée audio : 13 semaines.',
            'Données d’abonnement : tant que le compte existe, et au plus 13 mois après la fin de l’abonnement.',
            'Journaux : 7 jours au maximum.',
            'Sauvegardes chiffrées de la base de données (compte, sessions, compteurs, abonnements ; jamais d’enregistrement ni de texte) : 14 jours.',
          ],
        },
        {
          h: 'Sécurité',
          p: [
            'Tous les échanges entre l’application et le serveur sont chiffrés (HTTPS). Les jetons de session ne sont conservés que sous forme de hachage. Les clés de nos prestataires d’IA restent sur le serveur et ne figurent jamais dans l’application. L’accès au serveur est réservé à l’éditeur.',
          ],
        },
        {
          h: 'Supprimer votre compte',
          id: 'delete-account',
          p: ['Vous pouvez supprimer votre compte Souffle et ses données à tout moment :'],
          ul: [
            'Dans l’application : Paramètres > Supprimer le compte. Votre compte, vos sessions, vos compteurs et vos données d’abonnement sont immédiatement supprimés de notre base de données. Les journaux disparaissent sous 7 jours, et les sauvegardes chiffrées sous 14 jours.',
            'Sans l’application : écrivez à contact@galernestudio.com depuis l’adresse e-mail de votre compte Souffle, avec l’objet « Supprimer mon compte Souffle ». Nous le supprimons sous 30 jours et vous le confirmons par e-mail.',
            'Supprimer votre compte ne résilie pas un abonnement Souffle Pro : résiliez-le d’abord dans Google Play (Paiements et abonnements > Abonnements).',
            'Les réglages enregistrés sur votre téléphone (langue, dictionnaire, position de la capsule) sont supprimés quand vous désinstallez Souffle.',
          ],
        },
        {
          h: 'Enfants',
          p: ['Souffle ne s’adresse pas aux enfants de moins de 15 ans.'],
        },
        {
          h: 'Vos droits',
          p: [
            'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement et de portabilité de vos données, d’un droit d’opposition et de limitation, ainsi que du droit de définir des directives sur leur sort après votre décès. La suppression du compte depuis l’application est immédiate.',
            'Pour exercer vos droits, écrivez à contact@galernestudio.com depuis l’adresse e-mail de votre compte. Nous répondons sous un mois. Vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).',
          ],
        },
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
          p: ['Kioku has no account and no server for game data. Your progress, scores, statistics and settings (such as your language) are stored only on your device. We never receive them. Kioku never asks for your name, email address or any other personal information.'],
        },
        {
          h: 'Permissions',
          p: ['Kioku only needs internet access, to load ads. It does not use the camera, microphone, contacts, photos or location.'],
        },
        {
          h: 'Advertising',
          p: [
            'The app shows ads from two sources: Unity LevelPlay, an ad mediation service operated by Unity Technologies that selects ads from several advertising networks, and Galerne Studio’s own ad server, which promotes our apps and partner offers.',
            'When you first open the app, a consent form lets you choose whether ads can be personalised. With your consent, LevelPlay and its partner networks may use your device’s advertising ID, IP address, approximate location, device information and interactions with ads to personalise ads and measure their performance. Without consent, ads are not personalised, and limited data is still used for frequency capping, fraud prevention and aggregated reporting.',
            'Our own ad server receives the app name and ad placement with each request, and sees your IP address as part of the network connection. It counts impressions and clicks per ad and does not build a profile of you. Ad images are downloaded from our storage provider.',
            'You can change your consent choice at any time in Settings, under Ad privacy choices, and reset or delete your advertising ID in your Android settings. Unity’s privacy policy: unity.com/legal/game-player-and-app-user-privacy-policy.',
          ],
        },
        {
          h: 'Tips',
          p: ['You can choose to leave a tip to support the app. Payments are handled entirely by Google Play under Google’s privacy policy. We only receive confirmation that the purchase went through; we never see your payment details.'],
        },
        {
          h: 'Delete your data',
          id: 'delete-data',
          p: ['Kioku has no account, so there is nothing to close. To delete your Kioku data:'],
          ul: [
            'Game data (progress, scores, statistics, settings): uninstall Kioku, or go to Android Settings > Apps > Kioku > Storage > Clear data. It is deleted immediately and we keep no copy.',
            'Advertising data: open Android Settings > Google > Ads (or Privacy > Ads) and delete your advertising ID. To ask Unity to delete data linked to your device, use the request form in Unity’s privacy policy.',
            'Data seen by our own ad server: write to contact@galernestudio.com with the subject “Kioku data deletion”. We only keep aggregated counts of impressions and clicks that cannot identify you; server logs containing IP addresses are deleted within 30 days.',
            'Tips: purchase records are kept by Google Play under Google’s rules. Manage them from your Google account.',
          ],
        },
        {
          h: 'Children',
          p: ['Kioku is not directed at children under 13.'],
        },
        rights.en,
        changes.en,
      ],
      fr: [
        controller.fr,
        {
          h: 'Votre progression reste sur votre téléphone',
          p: ['Kioku n’a ni compte ni serveur pour les données de jeu. Votre progression, vos scores, vos statistiques et vos réglages (comme la langue) sont enregistrés uniquement sur votre appareil. Nous ne les recevons jamais. Kioku ne demande jamais votre nom, votre adresse e-mail ni aucune autre information personnelle.'],
        },
        {
          h: 'Autorisations',
          p: ['Kioku a seulement besoin d’un accès à Internet, pour charger les publicités. L’application n’utilise ni l’appareil photo, ni le micro, ni les contacts, ni les photos, ni la localisation.'],
        },
        {
          h: 'Publicité',
          p: [
            'L’application affiche des publicités provenant de deux sources : Unity LevelPlay, un service de médiation publicitaire exploité par Unity Technologies qui sélectionne des annonces auprès de plusieurs régies, et le serveur publicitaire de Galerne Studio, qui fait la promotion de nos applications et d’offres partenaires.',
            'À la première ouverture, un formulaire de consentement vous permet de choisir si les publicités peuvent être personnalisées. Avec votre consentement, LevelPlay et ses régies partenaires peuvent utiliser l’identifiant publicitaire de votre appareil, votre adresse IP, votre localisation approximative, des informations sur l’appareil et vos interactions avec les publicités pour les personnaliser et en mesurer les performances. Sans consentement, les publicités ne sont pas personnalisées, et des données limitées restent utilisées pour plafonner leur fréquence, lutter contre la fraude et produire des statistiques agrégées.',
            'Notre propre serveur publicitaire reçoit, à chaque requête, le nom de l’application et l’emplacement publicitaire, et voit votre adresse IP du fait de la connexion réseau. Il compte les affichages et les clics par publicité et ne constitue aucun profil vous concernant. Les images publicitaires sont téléchargées depuis notre prestataire de stockage.',
            'Vous pouvez modifier votre choix à tout moment dans les Réglages, rubrique Choix de confidentialité publicitaire, et réinitialiser ou supprimer votre identifiant publicitaire dans les réglages Android. Politique de confidentialité de Unity : unity.com/legal/game-player-and-app-user-privacy-policy.',
          ],
        },
        {
          h: 'Pourboires',
          p: ['Vous pouvez choisir de laisser un pourboire pour soutenir l’application. Les paiements sont entièrement gérés par Google Play, selon la politique de confidentialité de Google. Nous recevons uniquement la confirmation de l’achat ; nous ne voyons jamais vos informations de paiement.'],
        },
        {
          h: 'Supprimer vos données',
          id: 'delete-data',
          p: ['Kioku n’a pas de compte, il n’y a donc rien à clôturer. Pour supprimer vos données Kioku :'],
          ul: [
            'Données de jeu (progression, scores, statistiques, réglages) : désinstallez Kioku, ou allez dans Paramètres Android > Applications > Kioku > Stockage > Effacer les données. Elles sont supprimées immédiatement et nous n’en gardons aucune copie.',
            'Données publicitaires : ouvrez Paramètres Android > Google > Annonces (ou Confidentialité > Annonces) et supprimez votre identifiant publicitaire. Pour demander à Unity de supprimer les données liées à votre appareil, utilisez le formulaire indiqué dans la politique de confidentialité de Unity.',
            'Données vues par notre serveur publicitaire : écrivez à contact@galernestudio.com avec l’objet « Suppression données Kioku ». Nous ne conservons que des totaux agrégés d’affichages et de clics qui ne permettent pas de vous identifier ; les journaux serveur contenant des adresses IP sont supprimés sous 30 jours.',
            'Pourboires : les reçus d’achat sont conservés par Google Play selon les règles de Google. Gérez-les depuis votre compte Google.',
          ],
        },
        {
          h: 'Enfants',
          p: ['Kioku ne s’adresse pas aux enfants de moins de 13 ans.'],
        },
        rights.fr,
        changes.fr,
      ],
    },
  },
};
