// eslint-disable-next-line import/no-duplicates
import { Typography, Box } from '@mui/material';
// eslint-disable-next-line import/no-duplicates
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  return (
    <Box sx={{
      display: 'grid',
      placeItems: 'center',
      backgroundColor: '#ffffff',
      borderBottom: '7px solid #005aa7',

    }}
    >

      <Typography variant="h5">
        <Button>
          {' '}
          <ArrowBackIcon />
          Tilbake
        </Button>
        <CardMedia
          component="img"
          image="./banner2.png"
          alt="logo"
        />
        TRONDHEIM KOMMUNE
        <Button>
          <LanguageIcon />
          Språk
        </Button>
      </Typography>
    </Box>
  );
}
