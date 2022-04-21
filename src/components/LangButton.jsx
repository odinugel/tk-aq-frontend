import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { LanguageContext } from '../context/LanguageContext';
import noflag from '../assets/images/noflag.svg';
import britflag from '../assets/images/britflag.svg';

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
        <MenuItem onClick={() => { setLanguage(() => 'no'); handleClose(); }} selected={language === 'no'}>
          <img src={noflag} alt="Norsk" width="30px" style={{ marginRight: '5px' }} />
          Norwegian
        </MenuItem>
        <MenuItem onClick={() => { setLanguage(() => 'en'); handleClose(); }} selected={language === 'en'}>
          <img src={britflag} alt="English" width="30px" style={{ marginRight: '5px' }} />
          English
        </MenuItem>
      </Menu>
    </>
  );
}
