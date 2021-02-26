import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, FormControl, FormGroup, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { IStatus } from '../../../types/status'
import { IDriver } from '../../../types/table-data'

export type IEditDailyScheduleProps = DialogProps & {
  selectedDriverId?: number;
  driverOptions?: IDriver[];
  selectedStatusId?: number;
  statusOptions?: IStatus[];
}

export default function EditDailySchedule(props: IEditDailyScheduleProps) {
  const { selectedDriverId = null, driverOptions, selectedStatusId = null, statusOptions, ...dialogProps } = props;
  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Назначить водителя</DialogTitle>

      <DialogContent>
        <FormGroup>
          <FormControl>
            <InputLabel>Водитель</InputLabel>
            <Select value={selectedDriverId}>
              {
                driverOptions && driverOptions.map(driverOption => (
                  <MenuItem value={driverOption.id}>{ driverOption.name }</MenuItem>
                ))
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Статус</InputLabel>
            <Select value={selectedStatusId}>
              {
                statusOptions && statusOptions.map(statusOption => (
                  <MenuItem value={statusOption.id}>{ statusOption.name }</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </FormGroup>
      </DialogContent>

      <DialogActions>
        <Button variant='contained' color='primary'>Сохранить</Button>
        <Button onClick={() => dialogProps.onClose && dialogProps.onClose({}, 'backdropClick')}>Назад</Button>
      </DialogActions>
    </Dialog>
  )
}
