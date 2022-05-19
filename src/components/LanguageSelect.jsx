import { useContext } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
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
      <ListItemButton selected={(language === 'no')} onClick={() => setLanguage('no')}>
        <ListItemIcon>
          <img width="30px" src={noflag} alt="Norwegian flag" />
        </ListItemIcon>
        <Typography>Norsk</Typography>
      </ListItemButton>
      <Divider />
      <ListItemButton selected={(language === 'en')} onClick={() => setLanguage('en')}>
        <ListItemIcon>
          <img width="30px" src={britflag} alt="British flag" />
        </ListItemIcon>
        <Typography>English</Typography>
      </ListItemButton>
      <Divider />
    </List>
  );
}
