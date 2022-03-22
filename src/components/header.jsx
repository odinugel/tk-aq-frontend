// eslint-disable-next-line import/no-duplicates
import { Typography } from '@mui/material';
// eslint-disable-next-line import/no-duplicates
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LangButton from './LangButton';

export default function Header() {
  return (
    <Card sx={{
      display: 'flex',
      placeItems: 'center',
      backgroundColor: '#ffffff',
      borderBottom: '7px solid #005aa7',
      justifyContent: 'space-around',

    }}
    >
      <Card sx={{
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffffff',
      }}
      >
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          {' '}
          Tilbake
        </Button>
      </Card>
      <Card sx={{
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffffff',
      }}
      >
        {' '}
        <CardMedia
          component="img"
          image="./banner2.png"
          alt="logo"
        />
        <Typography>
          LUFTKVALITETSDATA
        </Typography>
      </Card>
      <Card sx={{
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffffff',
      }}
      >
        <LangButton />
      </Card>
    </Card>
  );
}
