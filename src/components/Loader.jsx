import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack
      height="100%"
      spacing={1}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}

    >

      <Skeleton
        height="100%"
        width="100%"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Skeleton
        height="100%"
        sx={{
          width: '100%',
          alignItems: 'baseline',
        }}
        variant="circular"
      />
      <Skeleton
        width="100%"
        height="100%"
      />

    </Stack>

  );
}
