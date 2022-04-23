import { useContext } from 'react';
import {
  List,
  ListItemButton,
  Stack,
  Typography,
  Divider,
} from '@mui/material';
import { LanguageContext } from '../context/LanguageContext';
import noflag from '../assets/images/noflag.svg';
import britflag from '../assets/images/britflag.svg';
import translations from '../translations/translations';

export default function LanguageSelect() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <List>
      <Typography margin="1rem 0">{translations.langBtn[language]}</Typography>
      <ListItemButton selected={(language === 'en')} onClick={() => setLanguage('en')}>
        <Stack direction="row" spacing={1}>
          <img src={britflag} width="30px" alt="British flag" />
          <span>English</span>
        </Stack>
      </ListItemButton>
      <Divider />
      <ListItemButton selected={(language === 'no')} onClick={() => setLanguage('no')}>
        <Stack direction="row" spacing={1}>
          <img src={noflag} width="30px" alt="Norwegian flag" />
          <span>Norsk</span>
        </Stack>
      </ListItemButton>
      <Divider />
    </List>
  );
}
