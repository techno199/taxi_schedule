import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from 'moment';
import { IDateRange } from "../../../types/date-range";
import { IStatus } from "../../../types/status";
import { IDriver, IScheduleScheme, ITableResponse } from "../../../types/table-data";

export type IScheduleScliceState = {
  selectedDate: string;
  drivers?: IDriver[];
  statuses?: IStatus[];
  scheduleScheme?: IScheduleScheme[];
}

const initialState: IScheduleScliceState = {
  selectedDate: moment().toISOString(),
}

const fetchTableData = createAsyncThunk(
  'schedule/fetchTableData',
  async (dateRange: IDateRange) => {
    const response: ITableResponse = await new Promise(r => {
      setTimeout(r, 1000);
    });

    return response;
  }
)

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setScheduleSliceState: (state, action: PayloadAction<Partial<IScheduleScliceState>>) => {
      return { ...state, ...action.payload }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      return { ...state, ...action.payload }
    })
  }
})

export const { setScheduleSliceState } = scheduleSlice.actions;
export default scheduleSlice.reducer;