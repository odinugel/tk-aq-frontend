import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function ShortInfo({ category }) {
  const { language } = useContext(LanguageContext);

  if (category === 1) { return translations.shortInfoGood[language]; }
  if (category === 2) { return translations.shortInfoModerate[language]; }
  if (category === 3) { return translations.shortInfoPoor[language]; }
  if (category === 4) { return translations.shortInfoVeryPoor[language]; }
  return '';
}
