/* eslint-disable react/no-array-index-key */
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function ShortInfo({ category }) {
  const { language } = useContext(LanguageContext);

  let categoryName = '';
  switch (category) {
    case 1: categoryName = 'shortInfoGood'; break;
    case 2: categoryName = 'shortInfoModerate'; break;
    case 3: categoryName = 'shortInfoPoor'; break;
    case 4: categoryName = 'shortInfoVeryPoor'; break;
    default:
  }

  return translations[categoryName][language].map((sentence, index) => (
    <Typography key={index} sx={{ marginBottom: '0.5rem' }}>{sentence}</Typography>
  ));
}
