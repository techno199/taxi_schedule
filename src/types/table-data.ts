import { IStatus } from "./status"

export type ITableResponse = {
  vehicles: IVehicle[];
  drivers: IDriver[];
  statuses: IStatus[];
  scheduleScheme: IScheduleScheme[];
}

export type IVehicle = {
  id: number;
  name: string;
}

export type IDriver = {
  id: number;
  name: string;
}

export type IVehicleSchedule = {
  vehicleId: number;
  driverId?: number;
  statusId?: number;
  isMainDriver?: boolean;
}

/** Represents a number vehicle schedules for a particular `date` */
export type IScheduleScheme = {
  date: string;
  schedule: IVehicleSchedule[];
}