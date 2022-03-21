// eslint-disable-next-line import/no-duplicates
import { Typography } from '@mui/material';
// eslint-disable-next-line import/no-duplicates
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  return (
    <Card sx={{
      display: 'grid',
      placeItems: 'center',
      backgroundColor: '#ffffff',
      borderBottom: '7px solid #005aa7',

    }}
    >
      <Typography variant="h5">
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          {' '}
          Tilbake
        </Button>
        <CardMedia
          component="img"
          image="https://tipqa.trondheim.kommune.no/luftkvalitet-frontend/static/media/Horisontal%20standard.3918fc07.svg"
          alt="logo"
        />
        TRONDHEIM KOMMUNE
        <Button variant="outlined" startIcon={<LanguageIcon />}>
          Språk
        </Button>
      </Typography>
    </Card>
  );
}
