import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';

export default function LangButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="text"
        size="xlarge"
        startIcon={<LanguageIcon />}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <img src="https://tipqa.trondheim.kommune.no/luftkvalitet-frontend/static/media/norway.6cf1dc59.svg" alt="no" width="20px" style={{ marginRight: '5px' }} />
          Norwegian
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img src="https://tipqa.trondheim.kommune.no/luftkvalitet-frontend/static/media/britain.24c58033.svg" alt="no" width="20px" style={{ marginRight: '5px' }} />
          English
        </MenuItem>
      </Menu>
    </div>
  );
}
