/* eslint-disable react/no-array-index-key */
import { Typography, Box, Paper } from '@mui/material';
import { useContext } from 'react';
import translations from '../translations/translations';
import { LanguageContext } from '../context/LanguageContext';

export default function FetchError() {
  const { language } = useContext(LanguageContext);
  return (
    <Paper sx={{
      display: 'grid',
      placeItems: 'center',
      minHeight: '50vh',
    }}
    >
      <Box>
        {translations.fetchError[language].map((line, index) => (
          <Typography key={index} variant="h5" sx={{ textAlign: 'center' }}>
            {line}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}
