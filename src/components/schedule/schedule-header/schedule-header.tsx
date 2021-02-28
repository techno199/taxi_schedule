import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react'
import ScheduleDatepicker from '../schedule-datepicker/schedule-datepicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column'
    }
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  button: {
    fontSize: 'inherit !important'
  },
  selector: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'unset',
      marginTop: 32
    }
  }
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
      <div>
        <span className={classes.title}>Календарь списаний</span>
        <Button className={classes.button} variant='contained' color='secondary'>Списать аренду</Button>
      </div>
      
      <div className={classes.selector}>
        <ScheduleDatepicker date={date} onDateChange={onDateChange} />
      </div>
    </div>
  )
}
