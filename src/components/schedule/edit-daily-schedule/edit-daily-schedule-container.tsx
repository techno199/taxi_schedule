import { DialogProps } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditDailyScheduleModalSliceState } from '../../../redux/features/edit-daily-schedule-modal/edit-daily-schedule-modal.slice';
import { IRootState } from '../../../redux/root-reducer';
import EditDailySchedule from './edit-daily-schedule';
import moment from 'moment';

export default function EditDailyScheduleContainer(props: Partial<DialogProps>) {
  const dispatch = useDispatch();
  const { editDailyScheduleModal, schedule } = useSelector((state: IRootState) => state);

  const handleClose = () => {
    dispatch(setEditDailyScheduleModalSliceState({ open: false }));
  }

  const handleDriverChange = (newDriverId: number) => {
    dispatch(setEditDailyScheduleModalSliceState({ selectedDriverId: newDriverId }));
  }

  const handleStatusChange = (newStatusId: number) => {
    dispatch(setEditDailyScheduleModalSliceState({ selectedStatusId: newStatusId }));
  }

  return (
    <EditDailySchedule
      date={moment(editDailyScheduleModal.selectedDate)}
      selectedDriverId={editDailyScheduleModal.selectedDriverId}
      selectedStatusId={editDailyScheduleModal.selectedStatusId}
      driverOptions={schedule.drivers}
      statusOptions={schedule.statuses}
      open={editDailyScheduleModal.open}
      onDriverChange={handleDriverChange}
      onStatusChange={handleStatusChange}
      onClose={handleClose}
      {...props}
    />
  )
}
