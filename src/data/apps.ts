export type Lang = 'en' | 'fr';
export type Kind = 'android' | 'windows';

export interface AppEntry {
  slug: string;
  name: string;
  initial: string;
  bg: string;
  fg: string;
  kinds: Kind[];
  platform: Record<Lang, string>;
  desc: Record<Lang, string>;
  playUrl?: string;
  msStoreUrl?: string; // fill in when you have the Microsoft Store link
  website?: Record<Lang, string>;
  /** true = has its own page on galernestudio.com */
  hasPage?: boolean;
}

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;
const same = (url: string) => ({ en: url, fr: url });

export const apps: AppEntry[] = [
  {
    slug: 'vulcainvpn',
    name: 'VulcainVPN',
    initial: 'V',
    bg: '#43292A',
    fg: '#FFB45C',
    kinds: ['android', 'windows'],
    platform: { en: 'Android · Windows', fr: 'Android · Windows' },
    desc: {
      en: 'A simple, private WireGuard VPN with servers in France.',
      fr: 'Un VPN WireGuard simple et privé, avec des serveurs en France.',
    },
    playUrl: play('com.vulcainvpn.app'),
    website: same('https://www.vulcainvpn.com'),
  },
  {
    slug: 'sideby',
    name: 'Sideby',
    initial: 'S',
    bg: '#1F6B5A',
    fg: '#FFFFFF',
    kinds: ['android'],
    platform: { en: 'Android', fr: 'Android' },
    desc: {
      en: 'Offline conversation translator. Talk face to face, each in your own language.',
      fr: 'Traducteur de conversation hors ligne. Parlez face à face, chacun dans sa langue.',
    },
    playUrl: play('com.galernestudio.sideby'),
    website: same('https://www.sidebytranslator.com'),
  },
  {
    slug: 'topotree',
    name: 'Topotree',
    initial: 'T',
    bg: '#16171C',
    fg: '#FFFFFF',
    kinds: ['windows'],
    platform: { en: 'Windows', fr: 'Windows' },
    desc: {
      en: 'See exactly what is filling your drive. Full-disk scans in seconds, treemap and sunburst views.',
      fr: 'Voyez exactement ce qui remplit votre disque. Analyse complète en quelques secondes, vues treemap et sunburst.',
    },
    website: same('https://www.topotree.app'),
  },
  {
    slug: 'duplicate-finder',
    name: 'Duplicate Finder',
    initial: 'D',
    bg: '#E8743B',
    fg: '#0E1A24',
    kinds: ['windows'],
    platform: { en: 'Windows', fr: 'Windows' },
    desc: {
      en: 'Find and remove duplicate files fast. 14-day free trial, lifetime license.',
      fr: 'Trouvez et supprimez vos fichiers en double. Essai gratuit 14 jours, licence à vie.',
    },
    website: { en: 'https://getduplicatefinder.app', fr: 'https://getduplicatefinder.app/fr' },
  },
  {
    slug: 'fidele',
    name: 'Fidèle',
    initial: 'F',
    bg: '#0F2027',
    fg: '#7FE3F5',
    kinds: ['android'],
    platform: { en: 'Android', fr: 'Android' },
    desc: {
      en: 'All your loyalty cards in one wallet, with barcode and QR scanning.',
      fr: 'Toutes vos cartes de fidélité dans un seul portefeuille, avec scan des codes-barres et QR.',
    },
    playUrl: play('app.fidele.wallet'),
    hasPage: true,
  },
  {
    slug: 'kotoba-ciphers',
    name: 'Kotoba Ciphers',
    initial: 'K',
    bg: '#2B3A55',
    fg: '#FFFFFF',
    kinds: ['android'],
    platform: { en: 'Android · Game', fr: 'Android · Jeu' },
    desc: {
      en: 'Decode encrypted quotes from Sun Tzu, Musashi, the Stoics and more, letter by letter.',
      fr: 'Déchiffrez lettre par lettre des citations de Sun Tzu, Musashi, des stoïciens et d’autres.',
    },
    playUrl: play('io.github.ryosaeba35.kotobaciphers'),
    hasPage: true,
  },
  {
    slug: 'kioku',
    name: 'Kioku',
    initial: 'K',
    bg: '#1B2A4A',
    fg: '#F5E6B8',
    kinds: ['android'],
    platform: { en: 'Android · Game', fr: 'Android · Jeu' },
    desc: {
      en: 'Brain training with real tricks for mental math and memory, from 7 to 777.',
      fr: 'Entraînement cérébral avec de vraies astuces de calcul mental et de mémoire, de 7 à 777 ans.',
    },
    playUrl: play('com.galernestudio.kioku'),
    hasPage: true,
  },
];

export const counts = { total: 8, android: 5, windows: 3 };

export interface AppPageData {
  tagline: Record<Lang, string>;
  meta: Record<Lang, string>;
  features: { icon: 'scan' | 'cards' | 'lock' | 'book' | 'hint' | 'trophy' | 'calc' | 'globe'; title: Record<Lang, string>; body: Record<Lang, string> }[];
  supportHint: Record<Lang, string>;
  /** Optional screenshots placed in /public/screenshots/<slug>/ */
  screenshots: string[];
  iconBg: string;
  iconFg: string;
  /** schema.org applicationCategory */
  category: string;
  /** Languages the app is available in (BCP 47) */
  languages: string[];
  /** Optional 1200x630 social image in /public, defaults to the studio image */
  ogImage?: string;
}

export const appPages: Record<string, AppPageData> = {
  fidele: {
    tagline: {
      en: 'All your loyalty cards in one place. Scan once, show the barcode at checkout, leave the plastic at home.',
      fr: 'Toutes vos cartes de fidélité au même endroit. Scannez une fois, présentez le code-barres en caisse, laissez le plastique à la maison.',
    },
    meta: { en: 'Free · Android', fr: 'Gratuit · Android' },
    iconBg: '#0F2027',
    iconFg: '#4DD9C8',
    category: 'LifestyleApplication',
    languages: ['en', 'fr'],
    screenshots: [],
    supportHint: {
      en: 'Found a bug or a card that won’t scan? Write to us.',
      fr: 'Un bug ou une carte qui ne se scanne pas ? Écrivez-nous.',
    },
    features: [
      {
        icon: 'scan',
        title: { en: 'Scan any card', fr: 'Scannez toutes vos cartes' },
        body: {
          en: 'Point the camera at a barcode or QR code, or type the number and pick the format.',
          fr: 'Visez le code-barres ou le QR code, ou saisissez le numéro et choisissez le format.',
        },
      },
      {
        icon: 'cards',
        title: { en: 'Swipe between cards', fr: 'Passez d’une carte à l’autre' },
        body: {
          en: 'Each card in its own color with the store logo. Turn the phone for a bigger barcode.',
          fr: 'Chaque carte a sa couleur et le logo de l’enseigne. Tournez le téléphone pour agrandir le code.',
        },
      },
      {
        icon: 'lock',
        title: { en: 'Your data, your phone', fr: 'Vos données restent sur votre téléphone' },
        body: {
          en: 'Cards are stored on the device. Export and import them as a backup file anytime.',
          fr: 'Les cartes sont stockées sur l’appareil. Exportez-les et importez-les en sauvegarde à tout moment.',
        },
      },
    ],
  },
  'kotoba-ciphers': {
    tagline: {
      en: 'Decode hidden wisdom, letter by letter. A word cipher puzzle game built on quotes from great thinkers.',
      fr: 'Déchiffrez la sagesse cachée, lettre par lettre. Un jeu de cryptogrammes construit sur les citations de grands penseurs.',
    },
    meta: { en: 'Free with ads · Android · EN / FR / JA', fr: 'Gratuit avec publicités · Android · EN / FR / JA' },
    iconBg: '#2B3A55',
    iconFg: '#FFFFFF',
    category: 'GameApplication',
    languages: ['en', 'fr', 'ja'],
    screenshots: [],
    supportHint: {
      en: 'Spotted a typo in a quote or a bug? Write to us.',
      fr: 'Une coquille dans une citation ou un bug ? Écrivez-nous.',
    },
    features: [
      {
        icon: 'book',
        title: { en: 'Timeless quotes', fr: 'Des citations intemporelles' },
        body: {
          en: 'Sun Tzu, Lao-Tzu, Confucius, Musashi, Bashō, Marcus Aurelius, Seneca and more.',
          fr: 'Sun Tzu, Lao-Tseu, Confucius, Musashi, Bashō, Marc Aurèle, Sénèque et d’autres.',
        },
      },
      {
        icon: 'hint',
        title: { en: 'Levels and hints', fr: 'Niveaux et indices' },
        body: {
          en: 'Several difficulty levels and a hint system when a puzzle resists.',
          fr: 'Plusieurs niveaux de difficulté et des indices quand une énigme résiste.',
        },
      },
      {
        icon: 'trophy',
        title: { en: 'Track your progress', fr: 'Suivez votre progression' },
        body: {
          en: 'Points, completion rate, best times and achievements. Play in English, French or Japanese.',
          fr: 'Points, taux de réussite, meilleurs temps et succès. Jouez en anglais, français ou japonais.',
        },
      },
    ],
  },
  kioku: {
    tagline: {
      en: 'Train your brain with tricks you can actually use. Mental math and memory techniques, taught through science and history.',
      fr: 'Entraînez votre cerveau avec des astuces vraiment utiles. Calcul mental et techniques de mémoire, à travers la science et l’histoire.',
    },
    meta: { en: 'Free with ads · Android · 13 languages', fr: 'Gratuit avec publicités · Android · 13 langues' },
    iconBg: '#1B2A4A',
    iconFg: '#F5E6B8',
    category: 'GameApplication',
    languages: ['en', 'fr', 'de', 'es', 'it', 'pt-PT', 'pt-BR', 'nl', 'pl', 'el', 'ja', 'zh-Hans', 'zh-Hant'],
    screenshots: [],
    supportHint: {
      en: 'Found a bug or a mistake in a lesson? Write to us.',
      fr: 'Un bug ou une erreur dans une leçon ? Écrivez-nous.',
    },
    features: [
      {
        icon: 'calc',
        title: { en: 'Mental math', fr: 'Calcul mental' },
        body: {
          en: 'Real calculation tricks for everyday life, one new technique per lesson.',
          fr: 'De vraies astuces de calcul pour la vie de tous les jours, une nouvelle technique par leçon.',
        },
      },
      {
        icon: 'book',
        title: { en: 'Memory techniques', fr: 'Techniques de mémoire' },
        body: {
          en: 'Learn to memorise with inventions, dates and stories from Europe and Asia.',
          fr: 'Apprenez à mémoriser avec des inventions, des dates et des histoires d’Europe et d’Asie.',
        },
      },
      {
        icon: 'globe',
        title: { en: 'For everyone, in 13 languages', fr: 'Pour tous, en 13 langues' },
        body: {
          en: 'From 7 to 777. Worlds of 10 lessons, progress and stats saved on your phone.',
          fr: 'De 7 à 777 ans. Des mondes de 10 leçons, progression et statistiques enregistrées sur votre téléphone.',
        },
      },
    ],
  },
};
