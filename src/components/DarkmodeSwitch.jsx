import { useRef } from 'react';
import {
  Switch, Stack, Slide, Box,
} from '@mui/material';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import PropTypes from 'prop-types';

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  const containerRef = useRef(null);
  return (
    <Box ref={containerRef}>
      <Stack direction="row" alignItems="center">
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Slide direction="up" in={darkMode} container={containerRef.current}>
          { darkMode ? <Brightness3Icon /> : <LightModeIcon /> }
        </Slide>
      </Stack>
    </Box>
  );
}
DarkModeSwitch.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
