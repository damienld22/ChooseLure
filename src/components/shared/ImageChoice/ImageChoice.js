import PropTypes from 'prop-types';
import { Paper, Typography } from "@mui/material";
import styles from './ImageChoice.module.scss';

export default function ImageChoice({ onClick, isSelected, picture, label }) {
  return (
    <Paper onClick={onClick} elevation={8} className={`${styles.choice} ${isSelected && styles.selected}`}>
      <img alt="Perch" src={picture} style={{maxWidth: '100%'}} />
      <Typography align='center'>{label}</Typography>
    </Paper>
  )
}

ImageChoice.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}