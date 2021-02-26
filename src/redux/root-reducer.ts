import { combineReducers } from '@reduxjs/toolkit';
import scheduleReducer from './features/schedule/schedule.slice'
import editDailyScheduleModalReducer from './features/edit-daily-schedule-modal/edit-daily-schedule-modal.slice';

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  editDailyScheduleModal: editDailyScheduleModalReducer
});

export type IRootState = ReturnType<typeof rootReducer>;