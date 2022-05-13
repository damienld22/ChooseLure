import { Card, CardContent, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Results.module.scss';

export default function Results({ results }) {
  return (
    <Card className={styles.container}>
      <CardHeader>Résultats</CardHeader>
      <CardContent>
        <ul className={styles.resultsContainer}>
          {results.map(res => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string)
}