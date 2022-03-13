import { Typography, Box } from '@mui/material';

export default function FetchError() {
  return (
    <Box sx={{
      display: 'grid',
      placeItems: 'center',
    }}
    >
      <Typography variant="h2">
        Fetch failed
      </Typography>
    </Box>
  );
}
