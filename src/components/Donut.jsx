// TODO: finn ut av prop-types
/* eslint-disable react/prop-types */
import {
  CircularProgress,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import donutColor from '../utils/donutColor';

export default function Donut({
  value,
  size,
  category,
  thickness,
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
          color={donutColor(category)}
          thickness={thickness}
        />
      </Box>
      <Box sx={{ position: 'absolute' }}>
        <Typography
          variant="h3"
          component="div"
          color="text.secondary"
          align="center"
        >
          {text ? category : null}
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
          thickness={thickness}
        />
      </Box>
    </Stack>
  );
}
