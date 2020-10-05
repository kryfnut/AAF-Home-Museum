import React, {useImperativeHandle} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function InformationEditDialog(props, ref) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [row, setCurrentRow] = React.useState(undefined);
  const {register, handleSubmit, setValue} = useForm();
  const onSubmit = () => ({});

  const handleOpen = (row) => {
    if (row) {
      setCurrentRow(row);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useImperativeHandle(ref, () => ({
    open: (row) => handleOpen(row),
  }))

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {row ? `${row.lastName} · ${row.firstName}` : 'Loading...'}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="dense"
            id="title"
            label="Title"
            type="input"
            fullWidth
          />
        </form>
      </Dialog>
    </div>
  );
}

export default React.forwardRef(InformationEditDialog)