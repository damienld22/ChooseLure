import { forwardRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Slide } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import styles from './Helper.module.scss';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Helper() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <IconButton color="primary" className={styles.button} onClick={() => setOpenModal(true)}>
        <HelpIcon />
      </IconButton>
    
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        onClose={() => setOpenModal(false)}>
        <DialogContent>
          <DialogContentText>
            Le choix des leurres en fonction des conditions de pêche n'est pas une science exacte.
            Les possibilités sont infinies et les avis toujours un peu subjectifs.
            Les résultats donnés ont simplement pour but de guider un pêcheur débutant dans ce choix.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}