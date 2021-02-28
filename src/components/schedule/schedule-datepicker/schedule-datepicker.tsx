import { Button, makeStyles, TextField } from '@material-ui/core';
import { ArrowLeft, ArrowRight, ConstructionOutlined } from '@material-ui/icons';
import moment from 'moment';
import React, { useState } from 'react'
import Moment from 'react-moment';

export type IScheduleDatepickerProps = {
  date?: moment.Moment;
  onDateChange?: (selectedDate: moment.Moment) => any;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    background: theme.palette.grey[300],
    borderRadius: 4
  },
  dateString: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    textAlign: 'center',
    cursor: 'default',
    textTransform: 'capitalize',
    fontWeight: 500
  }
}));

export default function ScheduleDatepicker(props: IScheduleDatepickerProps) {
  const { date = moment(), onDateChange } = props;
  const classes = useStyles();

  const handleDateChange = (direction: 'prev' | 'next') => () => {
    let newDate;

    if (direction === 'prev') {
      newDate = moment(date).subtract(1, 'month').set('date', 1);
    } else {
      newDate = moment(date).add(1, 'month').set('date', 1);
    }

    onDateChange && onDateChange(newDate);
  }

  return (
    <div className={classes.root}>
      <Button onClick={handleDateChange('prev')}>
        <ArrowLeft />
      </Button>
      
      <Moment className={classes.dateString} date={date} format='MMMM, YYYY' />

      <Button onClick={handleDateChange('next')}>
        <ArrowRight />
      </Button>
    </div>
  )
}
