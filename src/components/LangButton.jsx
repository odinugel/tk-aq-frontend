import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { LanguageContext } from '../context/LanguageContext';

export default function LangButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <IconButton
        variant="text"
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => setLanguage(() => 'no')} selected={language === 'no'}>
          <img src="./noflag.svg" alt="logo" width="30px" style={{ marginRight: '5px' }} />
          Norwegian
        </MenuItem>
        <MenuItem onClick={() => setLanguage(() => 'en')} selected={language === 'en'}>
          <img src="./britflag.svg" alt="logo" width="30px" style={{ marginRight: '5px' }} />
          English
        </MenuItem>
      </Menu>
    </>
  );
}
