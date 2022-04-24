/* eslint-disable react/jsx-boolean-value */
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../translations/translations';

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  const { language } = useContext(LanguageContext);
  const handleSelection = (event, value) => {
    if (value !== null) {
      setDarkMode(value);
    }
  };

  return (
    <>
      <Typography m="1rem 0">{translations.themeMode[language]}</Typography>
      <ToggleButtonGroup
        value={darkMode}
        exclusive
        onChange={handleSelection}
        aria-label="Choose display mode"
      >
        <ToggleButton value={false} aria-label="Light mode" sx={{ width: '50%' }}>
          <LightModeIcon sx={{ marginRight: '0.5rem' }} />
          <Typography>{translations.themeModeLight[language]}</Typography>
        </ToggleButton>
        <ToggleButton value={true} aria-label="Dark mode" sx={{ width: '50%' }}>
          <DarkModeIcon sx={{ marginRight: '0.5rem' }} />
          <Typography>{translations.themeModeDark[language]}</Typography>
        </ToggleButton>
      </ToggleButtonGroup>

    </>
  );
}
DarkModeSwitch.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
