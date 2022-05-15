import PropTypes from 'prop-types';
import ClearWaterIcon from '../../../assets/waterColor/clearWater.png';
import TroubledWaterIcon from '../../../assets/waterColor/troubledWater.png';
import { CLEAR_WATER, TROUBLED_WATER } from '../../../utils';
import ImageChoice from '../../shared/ImageChoice/ImageChoice';
import SelectorInAccordion from '../../shared/SelectorInAccordion/SelectorInAccordion';
import styles from './WaterColorSelector.module.scss';

export default function WaterColorSelector({ isOpen, onOpenChange, selected, onSelected }) {
  return (
    <SelectorInAccordion
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Couleur de l'eau"
      selected={selected}>
        <div className={styles.choices}>
          <ImageChoice
            onClick={() => onSelected(CLEAR_WATER)}
            isSelected={selected === CLEAR_WATER}
            label={CLEAR_WATER}
            picture={ClearWaterIcon} />
          <ImageChoice
            onClick={() => onSelected(TROUBLED_WATER)}
            isSelected={selected === TROUBLED_WATER}
            label={TROUBLED_WATER}
            picture={TroubledWaterIcon} />
        </div>
    </SelectorInAccordion>
  )
}

WaterColorSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.string
}