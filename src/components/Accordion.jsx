import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { Typography } from '@mui/material';

function AccordionAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (block) => (event, isExpanded) => {
    setExpanded(isExpanded ? block : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'block1'} onChange={handleChange('block1')}>
        <Typography>Test 1</Typography>
        <Typography>Test 2</Typography>
        <Typography>Test 3</Typography>
      </Accordion>
    </div>
  );
}

export default AccordionAQ;
