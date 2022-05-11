import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';
import PerchIcon from '../../assets/fishs/perch.png';
import PikeIcon from '../../assets/fishs/pike.png';
import { PERCH, PIKE } from '../../utils';
import ImageChoice from '../shared/ImageChoice/ImageChoice';
import styles from './TargetFishSelector.module.scss';

export default function TargetFishSelector({ isOpen, onOpenChange, selected, onSelected }) {
  const select = (selection) => {
    onSelected(selection);
    onOpenChange(false);
  }

  const Summary = () => selected ? (
    <div className={styles.summaryChecked}>
      <Typography>Poisson ciblé - {selected}</Typography>
      <CheckIcon color='success' />
    </div>
  ) : (
    <Typography>Poisson ciblé</Typography>
  );

  return (
    <Accordion expanded={isOpen} onChange={(_, expanded) => onOpenChange(expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Summary />
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.choices}>
          <ImageChoice
            onClick={() => select(PERCH)}
            isSelected={selected === PERCH}
            label="Perche"
            picture={PerchIcon} />
          <ImageChoice
            onClick={() => select(PIKE)}
            isSelected={selected === PIKE}
            label="Brochet"
            picture={PikeIcon} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

TargetFishSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.string
}