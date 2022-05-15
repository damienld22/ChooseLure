import PropTypes from 'prop-types';
import SunIcon from '../../../assets/weather/sun.png';
import CloudIcon from '../../../assets/weather/cloud.png';
import RainIcon from '../../../assets/weather/rain.png';
import { SUN, CLOUD, RAIN } from '../../../utils';
import ImageChoice from '../../shared/ImageChoice/ImageChoice';
import styles from './WeatherSelector.module.scss';
import SelectorInAccordion from '../../shared/SelectorInAccordion/SelectorInAccordion';

export default function WeatherSelector({ isOpen, onOpenChange, selected, onSelected }) {
  return (
    <SelectorInAccordion
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Temps"
      selected={selected}>
        <div className={styles.choices}>
          <ImageChoice
            onClick={() => onSelected(SUN)}
            isSelected={selected === SUN}
            label={SUN}
            picture={SunIcon} />
          <ImageChoice
            onClick={() => onSelected(CLOUD)}
            isSelected={selected === CLOUD}
            label={CLOUD}
            picture={CloudIcon} />
          <ImageChoice
            onClick={() => onSelected(RAIN)}
            isSelected={selected === RAIN}
            label={RAIN}
            picture={RainIcon} />
        </div>
    </SelectorInAccordion>
  )
}

WeatherSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.string
}