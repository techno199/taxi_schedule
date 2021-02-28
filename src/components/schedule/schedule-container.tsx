import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Schedule from './schedule'
import { fetchTableData } from '../../redux/features/schedule/schedule.slice';
import moment from 'moment';

export default function ScheduleContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData({ startDate: moment(), endDate: moment() }))
  }, []);

  return (
    <Schedule />
  )
}
