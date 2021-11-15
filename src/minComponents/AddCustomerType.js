import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import PortfelLinks from './PortfelLinks';
import { globalState } from './../globalState';
import { observer } from "mobx-react";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddCustomerType = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            startIcon={<AddIcon/>}
        >
            Добавить
        </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{(globalState.language === "uz") ? `Sug'urta turini tanlang` : `Выберите вид страховки`}</DialogTitle>
        <DialogContent>
          <PortfelLinks/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default observer(AddCustomerType);