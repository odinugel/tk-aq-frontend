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
      justifyContent: 'space-around',
      backgroundColor: '#ffffff',
      borderBottom: '7px solid #005aa7',

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
      <CardMedia
        style={{
          height: '80px',
          width: '60px',
          padding: '10px',
        }}
        component="img"
        image="./banner2.png"
        alt="logo"
        display="flex"
        height="10px"
        width="10px"
      />
      {' '}
      <Typography align="center" variant="h6">
        TRONDHEIM KOMMUNE
        <br />
        LUFTKVALITETSDATA
      </Typography>
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
