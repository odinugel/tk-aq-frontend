import { useState, useContext } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  Drawer,
  useMediaQuery,
  Stack,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import PropTypes from 'prop-types';
import LanguageSelect from './LanguageSelect';
import DarkModeSwitch from './DarkModeSwitch';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function SettingsDrawer({
  darkMode,
  setDarkMode,
}) {
  const [open, setOpen] = useState(false);
  const minWidth600px = useMediaQuery('(min-width:600px)');
  const { language } = useContext(LanguageContext);
  return (
    <>
      <IconButton onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" color="primary">
        <SettingsIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen((currentOpen) => !currentOpen)} anchor="right" sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }} PaperProps={{ sx: { width: (minWidth600px ? '360px' : '300px') } }}>
        <Box>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <Typography>{translations.settings[language]}</Typography>
            <IconButton onClick={() => setOpen((currentOpen) => !currentOpen)} variant="outlined" color="primary">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction="column" sx={{ padding: '0 1rem' }}>
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            <LanguageSelect />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

SettingsDrawer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
