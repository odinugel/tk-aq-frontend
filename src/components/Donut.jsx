import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Donut() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{
        width: 300,
        height: 300,
        transform: 'rotate(180deg)',
      }}
      >
        <CircularProgress
          variant="determinate"
          value={11}
          size={300}
          color="success"
          thickness={1.5}
        />
      </Box>
      <Box sx={{
        transform: 'translateY(-60%)',
        width: 300,
        height: 300,
      }}
      >
        <Typography variant="h3" component="div" color="text.secondary" align="center">
          God
        </Typography>
      </Box>
    </Stack>
  );
}
