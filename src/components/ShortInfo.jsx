import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function ShortInfo({ category }) {
  const { language } = useContext(LanguageContext);

  if (category === 'Good') { return translations.shortInfoGood[language]; }
  if (category === 'Moderate') { return translations.shortInfoModerate[language]; }
  if (category === 'Poor') { return translations.shortInfoPoor[language]; }
  if (category === 'Very Poor') { return translations.shortInfoVeryPoor[language]; }
  return '';
}
