import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setScheduleSliceState } from '../../../redux/features/schedule/schedule.slice';
import ScheduleHeader from './schedule-header'
import { IRootState } from '../../../redux/root-reducer';
import moment from 'moment';

export default function ScheduleHeaderContainer() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: IRootState) => state.schedule.selectedDate);
  
  const handleDateChange = (newDate: moment.Moment) => {
    dispatch(setScheduleSliceState({ selectedDate: newDate.toISOString() }));
  }

  return (
    <ScheduleHeader date={moment(selectedDate)} onDateChange={handleDateChange} />
  )
}
