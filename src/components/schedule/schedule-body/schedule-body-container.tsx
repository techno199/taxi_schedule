import React from 'react'
import { MOCK_TABLE_RESPONSE } from '../../../constants/mockData'
import ScheduleBody from './schedule-body'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/root-reducer';
import { setEditDailyScheduleModalSliceState } from '../../../redux/features/edit-daily-schedule-modal/edit-daily-schedule-modal.slice';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { setScheduleSliceState } from '../../../redux/features/schedule/schedule.slice';

export default function ScheduleBodyContainer() {
  const dispatch = useDispatch();
  const { isLoading, selectedDate, vehicles, drivers, statuses, scheduleScheme } = useSelector((state: IRootState) => state.schedule);

  const handleEditDateClick = (selectedDate: moment.Moment, vehicleId: number, driverId?: number, statusId?: number) => {
    dispatch(setEditDailyScheduleModalSliceState({
      open: true,
      selectedDate: selectedDate.toISOString(),
      selectedVehicleId: vehicleId,
      selectedDriverId: driverId,
      selectedStatusId: statusId
    }));
  }

  const handleReturnToTodayClick = () => {
    dispatch(setScheduleSliceState({ selectedDate: moment().toISOString() }));
  }

  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down('lg'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  
  let renderDaysCount = 7;
  let vehicleNameCellWidth = 200;

  if(downLg) {
    renderDaysCount = 5;
  }

  if (downMd) {
    renderDaysCount = 3;
    vehicleNameCellWidth = 150;
  }

  if (downSm) {
    renderDaysCount = 2;
    vehicleNameCellWidth = 100;
  }

  return (
    <ScheduleBody
      isLoading={isLoading}
      vehicles={vehicles}
      drivers={drivers}
      statuses={statuses}
      scheduleScheme={scheduleScheme}
      renderDaysCount={renderDaysCount}
      vehicleNameCellWidth={vehicleNameCellWidth}
      startDate={moment(selectedDate)}
      onEditDateClick={handleEditDateClick}
      onReturnToTodayClick={handleReturnToTodayClick}
    />
  )
}