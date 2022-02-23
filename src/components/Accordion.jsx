import React, { useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';


function AccordionAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (block) => (event, isExpanded) => {
    setExpanded(isExpanded ? block : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'block1'} onChange={handleChange('panel1')}>
                
            </Accordion> 
        </div>
    )
}

export default AccordionAQ;