import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus } from "../../../types/status";
import { IDriver } from "../../../types/table-data";

export type IEditDailyScheduleModalState = {
  open: boolean;
  selectedDate?: string;
  selectedVehicleId?: number;
  selectedDriverId?: number;
  selectedStatusId?: number;
}

const initialState: IEditDailyScheduleModalState = {
  open: false
}

const editDailyScheduleModalSlice = createSlice({
  name: 'editDailyScheduleModal',
  initialState,
  reducers: {
    setEditDailyScheduleModalSliceState: (state, action: PayloadAction<Partial<IEditDailyScheduleModalState>>) => {
      return { ...state, ...action.payload }
    }
  },
})

export const { setEditDailyScheduleModalSliceState } = editDailyScheduleModalSlice.actions;
export default editDailyScheduleModalSlice.reducer;