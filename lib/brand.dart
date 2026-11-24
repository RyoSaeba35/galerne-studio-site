import 'l10n/l10n.dart';

/// "Plume" worldwide, "Kikitori" when the app runs in an Asian language.
/// Keep in sync with android/app/src/main/res/values*/strings.xml (launcher name).
const _kikitoriLanguages = {'ja', 'ko', 'zh', 'th', 'vi'};

String appName() => _kikitoriLanguages.contains(currentLanguage) ? 'Kikitori' : 'Plume';

const packageId = 'com.galernestudio.plume';
const playUrl = 'https://play.google.com/store/apps/details?id=$packageId';
const playMarketUrl = 'market://details?id=$packageId';
const developerUrl = 'https://play.google.com/store/apps/developer?id=Galerne+Studio';
const websiteUrl = 'https://galernestudio.com';
const privacyUrl = 'https://galernestudio.com/privacy/plume';
const supportEmail = 'contact@galernestudio.com';
