import { Card, CardContent, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Results.module.scss';

export default function Results() {
  return (
    <Card className={styles.container}>
      <CardHeader>Résultats</CardHeader>
      <CardContent>
        <ul className={styles.resultsContainer}>
          <li>Spinnerbait est un bon leurre</li>
          <li>Couleure naturelle</li>
          <li>Taille petite</li>
        </ul>
      </CardContent>
    </Card>
  )
}

Results.propTypes = {

}