import type { I18n } from '@toast-ui/editor';

export function addLangs(i18n: I18n) {
  i18n.setLanguage('en', {
    'Font Size': 'Font Size',
  });

  i18n.setLanguage(['de', 'de-DE'], {
    'Font Size': 'Schriftgröße',
  });
}