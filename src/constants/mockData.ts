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
  statuses: [
    { id: 0, name: 'Выход', color: '#4caf50' },
    { id: 1, name: 'Простой', color: '#f44336' },
    { id: 2, name: 'Ремонт', color: '#ff9800' }
  ],
  scheduleScheme: [
    { 
      date: '2021-02-25',
      schedule: [{ driverId: 0, vehicleId: 0, statusId: 0, isMainDriver: Math.random() < 0.5 }]
    },
    { 
      date: '2021-02-26',
      schedule: [{ driverId: 1, vehicleId: 1, statusId: 1, isMainDriver: Math.random() < 0.5 }]
    },
    { 
      date: '2021-02-27',
      schedule: [{ driverId: 1, vehicleId: 2, statusId: 2, isMainDriver: Math.random() < 0.5 }]
    },
    { 
      date: '2021-02-28',
      schedule: [{ driverId: 0, vehicleId: 0, statusId: 0, isMainDriver: Math.random() < 0.5 }, { driverId: 1, vehicleId: 2, statusId: 0, isMainDriver: Math.random() < 0.5 }]
    },
    { 
      date: '2021-03-1',
      schedule: [{ driverId: 1, vehicleId: 2, statusId: 2, isMainDriver: Math.random() < 0.5 }]
    },
  ]
}