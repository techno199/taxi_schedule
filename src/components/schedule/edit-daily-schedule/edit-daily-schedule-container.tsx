import { DialogProps } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditDailyScheduleModalSliceState } from '../../../redux/features/edit-daily-schedule-modal/edit-daily-schedule-modal.slice';
import { IRootState } from '../../../redux/root-reducer';
import EditDailySchedule from './edit-daily-schedule';

export default function EditDailyScheduleContainer(props: Partial<DialogProps>) {
  const dispatch = useDispatch();
  const editDailyScheduleModal = useSelector((state: IRootState) => state.editDailyScheduleModal);

  const handleClose = () => {
    dispatch(setEditDailyScheduleModalSliceState({ open: false }));
  }

  return (
    <EditDailySchedule {...props} open={editDailyScheduleModal.open} onClose={handleClose} />
  )
}
