/* eslint-disable react/no-array-index-key */
import {
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  Skeleton,
} from '@mui/material';

export default function AccordionLoader() {
  return (
    <div>
      {
    [...Array(4)].map((val, index) => (
      <Accordion key={index}>
        <AccordionSummary>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <Skeleton variant="circular" width={50} height={50} />
            <Typography>
              <Skeleton width="3ch" />
            </Typography>
          </Box>
        </AccordionSummary>
      </Accordion>
    ))
  }
    </div>
  );
}
