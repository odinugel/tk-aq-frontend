import Skeleton from '@mui/material/Skeleton';
import {
  Paper,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function PrimaryDisplayLoader() {
  return (
    <Paper sx={{
      padding: '1rem',
      margin: '0 auto',
      maxWidth: '600px',
      marginBottom: '1rem',
    }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h4" width="60%">
          <Skeleton />
        </Typography>
        <Typography variant="h6" mb="1rem">
          <Skeleton width="30ch" />
        </Typography>
      </Stack>
      <Box width="75%" margin="0 auto" marginBottom="4.5rem">
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
      {/* TODO: This needs to be redone, skeletons should wrap typography, circle is not round */}
      <Stack direction="row" width="90%" sx={{ margin: '0.5rem', marginTop: '2rem' }}>
        <Skeleton variant="circular" width={24} height={24}>
          <InfoOutlinedIcon />
        </Skeleton>
        <Stack width="100%" sx={{ margin: '0 1rem' }}>
          <Skeleton width="100%" />
          <Skeleton width="100%" />
          <Skeleton width="100%" />
        </Stack>
      </Stack>
    </Paper>

  );
}
