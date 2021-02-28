import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, FormControl, FormGroup, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { IStatus } from '../../../types/status'
import { IDriver } from '../../../types/table-data'

const useStyles = makeStyles(theme => ({
  formControl: {
    '&:not(:last-child)': {
      marginBottom: 12
    }
  }
}));

export type IEditDailyScheduleProps = DialogProps & {
  date: moment.Moment;
  selectedDriverId?: number;
  driverOptions?: IDriver[];
  selectedStatusId?: number;
  statusOptions?: IStatus[];
  onDriverChange?: (newDriverId: number) => any;
  onStatusChange?: (newStatusId: number) => any;
}

export default function EditDailySchedule(props: IEditDailyScheduleProps) {
  const { date, selectedDriverId = null, driverOptions, selectedStatusId = null, statusOptions, onDriverChange, onStatusChange, ...dialogProps } = props;
  const classes = useStyles();

  const handleChange = (type: 'driver' | 'status') => (e: ChangeEvent<any>) => {
    switch (type) {
      case 'driver':
        onDriverChange && onDriverChange(e.target.value);
        break;
      case 'status':
        onStatusChange && onStatusChange(e.target.value);
        break;
    }
  }

  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Назначить водителя на <u>{ date.format('LL') }</u></DialogTitle>

      <DialogContent>
        <FormGroup>
          <FormControl className={classes.formControl}>
            <InputLabel>Водитель</InputLabel>
            <Select value={selectedDriverId} onChange={handleChange('driver')}>
              {
                driverOptions && driverOptions.map(driverOption => (
                  <MenuItem key={driverOption.id} value={driverOption.id}>{ driverOption.name }</MenuItem>
                ))
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Статус</InputLabel>
            <Select value={selectedStatusId} onChange={handleChange('status')}>
              {
                statusOptions && statusOptions.map(statusOption => (
                  <MenuItem key={statusOption.id} value={statusOption.id}>{ statusOption.name }</MenuItem>
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
