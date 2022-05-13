import { Typography } from '@mui/material';
import Helper from '../Helper/Helper';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <Typography variant='h2' align='center' marginTop='5%' marginBottom='20px'>Quel leurre utiliser ?</Typography>

      <div className={styles.subtitle}>
        <Typography variant='subtitle1' align='center'>
          Outil minimaliste pour vous aider à choisir vos leurres en fonction des conditions de pêche
        </Typography>

        <Helper />
      </div>
    </div>
  )
}