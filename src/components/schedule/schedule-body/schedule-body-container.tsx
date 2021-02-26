import React from 'react'
import { MOCK_TABLE_RESPONSE } from '../../../constants/mockData'
import ScheduleBody from './schedule-body'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/root-reducer';
import { setEditDailyScheduleModalSliceState } from '../../../redux/features/edit-daily-schedule-modal/edit-daily-schedule-modal.slice';

export type IScheduleBodyContainerProps = {
  onEditDateClick?: (date: moment.Moment) => any;
}

export default function ScheduleBodyContainer() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: IRootState) => state.schedule.selectedDate);

  const handleEditDateClick = () => {
    dispatch(setEditDailyScheduleModalSliceState({ open: true }));
  }

  return (
    <ScheduleBody
      startDate={moment(selectedDate)}
      tableResponse={MOCK_TABLE_RESPONSE}
      onEditDateClick={handleEditDateClick}
    />
  )
}