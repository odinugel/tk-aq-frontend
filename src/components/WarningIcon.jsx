import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function WarningIcon() {
  const animation = {
    '@keyframes pulsate': {
      '0%': {
        opacity: 0.5,
        fill: '#FDC73C',
      },
      '100%': {
        opacity: 1,
        fill: '#E41F1A',
      },
    },
    animation: 'pulsate 2s infinite',
  };

  return (
    <WarningAmberIcon sx={{
      alignSelf: 'center',
      mr: '1rem',
      fill: 'error.main',
      fontSize: '3rem',
      ...animation,
    }}
    />
  );
}
