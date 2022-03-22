import Skeleton from '@mui/material/Skeleton';
import { Paper, Typography, Stack } from '@mui/material';

export default function Loader() {
  return (
    <Paper>
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h4" m="1rem" width="60%">
          <Skeleton />
        </Typography>
        <Typography variant="h6" mb="1rem">
          <Skeleton />
        </Typography>
      </Stack>
      <Skeleton
        width="60%"
        height="100%"
        variant="circular"

      />
      <Skeleton />
    </Paper>

  );
}
