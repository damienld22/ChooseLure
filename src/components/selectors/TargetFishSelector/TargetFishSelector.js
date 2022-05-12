import PropTypes from 'prop-types';
import PerchIcon from '../../../assets/fishs/perch.png';
import PikeIcon from '../../../assets/fishs/pike.png';
import { PERCH, PIKE } from '../../../utils';
import ImageChoice from '../../shared/ImageChoice/ImageChoice';
import styles from './TargetFishSelector.module.scss';
import SelectorInAccordion from '../../shared/SelectorInAccordion/SelectorInAccordion';

export default function TargetFishSelector({ isOpen, onOpenChange, selected, onSelected }) {
  return (
    <SelectorInAccordion
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Poisson ciblé"
      selected={selected}>
        <div className={styles.choices}>
          <ImageChoice
            onClick={() => onSelected(PERCH)}
            isSelected={selected === PERCH}
            label="Perche"
            picture={PerchIcon} />
          <ImageChoice
            onClick={() => onSelected(PIKE)}
            isSelected={selected === PIKE}
            label="Brochet"
            picture={PikeIcon} />
        </div>
    </SelectorInAccordion>
  )
}

TargetFishSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.string
}