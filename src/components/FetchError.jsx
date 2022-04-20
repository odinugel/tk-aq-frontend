import { Typography, Paper } from '@mui/material';
import { useContext } from 'react';
import translations from '../translations/translations';
import languageContext from '../context/LanguageContext';

export default function FetchError() {
  const language = useContext(languageContext);
  return (
    <Paper sx={{
      display: 'grid',
      placeItems: 'center',
      minHeight: '50vh',
    }}
    >
      <Typography variant="h5" sx={{ padding: '4rem' }}>
        {translations.fetchError[language]}
      </Typography>
    </Paper>
  );
}
