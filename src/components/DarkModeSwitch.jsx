import { Switch } from '@mui/material';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import PropTypes from 'prop-types';

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  console.log(darkMode);
  return (
    <>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      { darkMode ? <Brightness3Icon /> : <LightModeIcon /> }
    </>
  );
}
DarkModeSwitch.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
