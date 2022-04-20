/* eslint-disable react/no-array-index-key */
import {
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  Skeleton,
} from '@mui/material';

export default function AccordionLoaderAQ() {
  return (
    <Box margin="0 auto" sx={{ maxWidth: '600px' }}>
      {
    [...Array(4)].map((val, index) => (
      <Accordion key={index}>
        <AccordionSummary>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Skeleton variant="circular" width={60} height={60} />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }}>
              <Typography sx={{ fontSize: '1.2rem' }}>
                <Skeleton width="20ch" />
              </Typography>
              <Typography>
                <Skeleton width="15ch" />
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
      </Accordion>
    ))
  }
    </Box>
  );
}
