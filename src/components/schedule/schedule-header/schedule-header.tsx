import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react'
import ScheduleDatepicker from '../schedule-datepicker/schedule-datepicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10
  },
}));

export type IScheduleHeaderProps = {
  date: moment.Moment;
  onDateChange?: (newDate: moment.Moment) => any;
}

export default function ScheduleHeader(props: IScheduleHeaderProps) {
  const classes = useStyles();
  const { date, onDateChange } = props;

  return (
    <div className={classes.root}>
      <span className={classes.title}>Календарь списаний</span>
      <Button variant='contained' color='secondary'>Списать аренду</Button>
      <Box marginLeft='auto'>
        <ScheduleDatepicker date={date} onDateChange={onDateChange} />
      </Box>
    </div>
  )
}
