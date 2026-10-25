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
    bg: '#0E1A24',
    fg: '#7FD1C7',
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
    bg: '#1F6F78',
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
    bg: '#3F7D4E',
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
    bg: '#DCE6E3',
    fg: '#0E1A24',
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
];

export const counts = { total: 7, android: 4, windows: 3 };

export interface AppPageData {
  tagline: Record<Lang, string>;
  meta: Record<Lang, string>;
  features: { icon: 'scan' | 'cards' | 'lock' | 'book' | 'hint' | 'trophy'; title: Record<Lang, string>; body: Record<Lang, string> }[];
  supportHint: Record<Lang, string>;
  /** Optional screenshots placed in /public/screenshots/<slug>/ */
  screenshots: string[];
  iconBg: string;
  iconFg: string;
}

export const appPages: Record<string, AppPageData> = {
  fidele: {
    tagline: {
      en: 'All your loyalty cards in one place. Scan once, show the barcode at checkout, leave the plastic at home.',
      fr: 'Toutes vos cartes de fidélité au même endroit. Scannez une fois, présentez le code-barres en caisse, laissez le plastique à la maison.',
    },
    meta: { en: 'Free · Android', fr: 'Gratuit · Android' },
    iconBg: '#0F2027',
    iconFg: '#7FD1C7',
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
};
