import { Box, Button, makeStyles } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/root-reducer';
import ScheduleFooter, { IScheduleFooterArrowClickEvent } from './schedule-footer';
import moment from 'moment';
import { setScheduleSliceState } from '../../../redux/features/schedule/schedule.slice';

export default function ScheduleFooterContainer() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: IRootState) => state.schedule.selectedDate);

  const handleArrowClick = (e: IScheduleFooterArrowClickEvent) => {
    const newDate = moment(selectedDate);

    if (e.direction === 'prev') {
      newDate.subtract(1, 'day');
    } else {
      newDate.add(1, 'day');
    }

    dispatch(setScheduleSliceState({ selectedDate: newDate.toISOString() }));
  }

  return (
    <ScheduleFooter onArrowClick={handleArrowClick} />
  )
}
