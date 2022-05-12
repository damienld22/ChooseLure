import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';
import styles from './SelectorInAccordion.module.scss';

export default function SelectorInAccordion({ title, isOpen, onOpenChange, selected, children }) {
  const Summary = () => selected ? (
    <div className={styles.summaryChecked}>
      <Typography>{title} - {selected}</Typography>
      <CheckIcon color='success' />
    </div>
  ) : (
    <Typography>{title}</Typography>
  );

  return (
    <Accordion className={styles.container} expanded={isOpen} onChange={(_, expanded) => onOpenChange(expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Summary />
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

SelectorInAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  selected: PropTypes.string
}