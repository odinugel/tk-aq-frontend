import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Donut from './Donut';
import RawData from './RawData';


function AccordionAQ() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            Panel 1
          </Typography>
          <Donut size={50} value={25} color="success" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repellat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Donut size={50} color="success" value={<RawData value={gas[0].NO2}/>}/>
          <Typography>
            Panel 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repellat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            Panel 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repellat!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionAQ;
