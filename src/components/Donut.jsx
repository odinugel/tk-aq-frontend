// TODO: finn ut av prop-types
/* eslint-disable react/prop-types */
import {
  CircularProgress,
  Typography,
  Stack,
  Box,
} from '@mui/material';

export default function Donut({
  value,
  size,
  color,
  text,
}) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{
        transform: 'rotate(180deg)', zIndex: '99',
      }}
      >
        <CircularProgress
          variant="determinate"
          value={value}
          size={size}
          color={color}
          thickness={1.5}
        />
      </Box>
      <Box sx={{ position: 'absolute' }}>
        <Typography
          variant="h3"
          component="div"
          color="text.secondary"
          align="center"
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{
        transform: 'rotate(180deg)', position: 'absolute',
      }}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          color="background"
          thickness={1.5}
        />
      </Box>
    </Stack>
  );
}
