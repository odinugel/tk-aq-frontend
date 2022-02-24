// TODO: finn ut av prop-types
/* eslint-disable react/prop-types */
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        color={color}
        thickness={1.5}
        sx={{
          transform: 'rotate(180deg)',
        }}
      />
      <Box>
        <Typography
          variant="h3"
          component="div"
          color="text.secondary"
          align="center"
          sx={{
            transform: `translateY(-${size}%)`,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
}
