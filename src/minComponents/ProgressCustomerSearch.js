import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    marginTop: 40,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ProgressCustomerSearch() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>
  );
}
