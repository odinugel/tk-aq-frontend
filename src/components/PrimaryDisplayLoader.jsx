import Skeleton from '@mui/material/Skeleton';
import {
  Paper,
  Typography,
  Stack,
  Box,
} from '@mui/material';

export default function Loader() {
  return (
    <Paper>
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h4" m="1rem" width="60%">
          <Skeleton />
        </Typography>
        <Typography variant="h6" mb="1rem">
          <Skeleton width="30ch" />
        </Typography>
      </Stack>
      <Box width="60%" margin="0 auto" marginBottom="3.5rem">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            height: 0,
            overflow: 'hidden',
            paddingTop: '100%',
            position: 'relative',
          }}
        >
          <Skeleton
            width="100%"
            height="100%"
            variant="circular"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Stack>
      </Box>
    </Paper>

  );
}
