import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import ScheduleDatepicker from '../_common/schedule-datepicker/schedule-datepicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 600
  },
  rentBtn: {
    marginLeft: 10
  }
}));

export default function ScheduleHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.title}>Календарь списаний</span>
      <Button className={classes.rentBtn} variant='contained' color='secondary'>Списать аренду</Button>
      <ScheduleDatepicker />
    </div>
  )
}
