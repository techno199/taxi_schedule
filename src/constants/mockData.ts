import { ITableResponse } from "../types/table-data";

export const MOCK_TABLE_RESPONSE: ITableResponse = {
  vehicles: [
    { id: 0, name: 'Volkswagen Polo' },
    { id: 1, name: 'Volkswagen Polo' },
    { id: 2, name: 'Volkswagen Passat' }
  ],
  drivers: [
    { id: 0, name: 'Driver 1' },
    { id: 1, name: 'Driver 2' }
  ],
  scheduleScheme: [
    { 
      date: '2021-02-25',
      schedule: [{ driverId: 0, vehicleId: 0 }]
    },
    { 
      date: '2021-02-26',
      schedule: [{ driverId: 1, vehicleId: 1 }]
    },
    { 
      date: '2021-02-27',
      schedule: [{ driverId: 1, vehicleId: 2 }]
    },
  ]
}