/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import translations from '../translations/translations';
import { LanguageContext } from '../context/LanguageContext';

export default function FetchSensorsError() {
  const { language } = useContext(LanguageContext);
  return (
    <Paper sx={{
      height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      {translations.fetchSensorsError[language].map((text, index) => (
        <Typography key={index}>
          {text}
        </Typography>
      ))}
    </Paper>
  );
}
