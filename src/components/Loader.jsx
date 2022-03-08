import { Box, CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <CircularProgress size={250} thickness={2} />
    </Box>
  );
}
