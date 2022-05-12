import PropTypes from 'prop-types';
import SpringIcon from '../../../assets/seasons/spring.png';
import AutumnIcon from '../../../assets/seasons/autumn.png';
import SummerIcon from '../../../assets/seasons/summer.png';
import WinterIcon from '../../../assets/seasons/winter.png';
import { AUTUMN, SPRING, SUMMER, WINTER } from '../../../utils';
import ImageChoice from '../../shared/ImageChoice/ImageChoice';
import styles from './SeasonSelector.module.scss';
import SelectorInAccordion from '../../shared/SelectorInAccordion/SelectorInAccordion';

export default function SeasonSelector({ isOpen, onOpenChange, selected, onSelected }) {
  return (
    <SelectorInAccordion
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Saison"
      selected={selected}>
        <div className={styles.choices}>
          <ImageChoice
            onClick={() => onSelected(SPRING)}
            isSelected={selected === SPRING}
            label={SPRING}
            picture={SpringIcon} />
          <ImageChoice
            onClick={() => onSelected(SUMMER)}
            isSelected={selected === SUMMER}
            label={SUMMER}
            picture={SummerIcon} />
          <ImageChoice
            onClick={() => onSelected(AUTUMN)}
            isSelected={selected === AUTUMN}
            label={AUTUMN}
            picture={AutumnIcon} />
          <ImageChoice
            onClick={() => onSelected(WINTER)}
            isSelected={selected === WINTER}
            label={WINTER}
            picture={WinterIcon} />
        </div>
    </SelectorInAccordion>
  )
}

SeasonSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.string
}