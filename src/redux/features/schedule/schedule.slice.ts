import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from 'moment';
import { MOCK_TABLE_RESPONSE } from "../../../constants/mockData";
import { IDateRange } from "../../../types/date-range";
import { IStatus } from "../../../types/status";
import { IDriver, IScheduleScheme, ITableResponse, IVehicle } from "../../../types/table-data";

export type IScheduleScliceState = {
  selectedDate: string;
  vehicles?: IVehicle[];
  drivers?: IDriver[];
  statuses?: IStatus[];
  scheduleScheme?: IScheduleScheme[];
  isLoading: boolean;
}

const initialState: IScheduleScliceState = {
  selectedDate: moment().toISOString(),
  isLoading: false
}

export const fetchTableData = createAsyncThunk(
  'schedule/fetchTableData',
  async (dateRange: IDateRange) => {
    const response: ITableResponse = await new Promise(r => {
      setTimeout(() => r(MOCK_TABLE_RESPONSE), 3000);
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
    builder.addCase(fetchTableData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTableData.fulfilled, (state, action) => {
      return { ...state, ...action.payload, isLoading: false }
    })
  }
})

export const { setScheduleSliceState } = scheduleSlice.actions;
export default scheduleSlice.reducer;