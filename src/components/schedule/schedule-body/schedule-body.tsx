import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { ITableResponse, IVehicle } from '../../../types/table-data';
import ScheduleDriverCell from './schedule-driver-cell/schedule-driver-cell';
import moment from 'moment';
import { IScheduleBodyContainerProps } from './schedule-body-container';
import classnames from 'classnames';

// MISC
const vehicleNameCellWidth = 200;
const rowHeight = 81;

export type IScheduleBodyProps = IScheduleBodyContainerProps & {
  tableResponse: ITableResponse;
  startDate: moment.Moment;
}

// CSS
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
    marginLeft: vehicleNameCellWidth,
    position: 'relative',
    '& .MuiTableCell-root': {
      borderBottom: 'none',
    }
  },
  tableRoot: {
    tableLayout: 'fixed',
    minWidth: 600
  },
  headerCell: {
    textAlign: 'center',
    width: 'calc(100% / 7)'
  },
  cell: {
    height: rowHeight,
    boxSizing: 'border-box',
    padding: 8,
    position: 'relative'
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    '&:before': {
      content: 'attr(data-month)',
      position: 'absolute',
      top: -12,
      fontWeight: 500,
      textTransform: 'capitalize'
    }
  },
  vehicleNameCell: {
    position: 'absolute',
    width: vehicleNameCellWidth,
    height: rowHeight,
    boxSizing: 'border-box',
    padding: 8,
    right: '100%',
    textAlign: 'left'
  },
  vehicleNameContainer: {
    backgroundColor: `${theme.palette.grey[300]} !important`,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function ScheduleBody(props: IScheduleBodyProps) {
  const { tableResponse, startDate, onEditDateClick } = props;
  const { scheduleScheme, vehicles, drivers } = tableResponse;
  const classes = useStyles();

  // CREATE AN ARRAY OF DATES TO RENDER
  const endDate = moment(startDate).add(7, 'days');
  const targetDates: moment.Moment[] = [];
  for (let d = moment(startDate); d.isBefore(endDate); d.add(1, 'day')) {
    targetDates.push(moment(d));
  }

  const handleEditDateClick = (clickedDate: moment.Moment) => () => {
    onEditDateClick && onEditDateClick(clickedDate);
  }

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table className={classes.tableRoot}>
          {/* TABLE HEADER (DATES) */}
          <TableHead>
            <TableCell className={classes.vehicleNameCell}></TableCell>

            {
              targetDates.map(d => <TableCell className={classes.headerCell}>{ d.format('DD, dd') }</TableCell>)
            }
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {
              vehicles.map((vehicle: IVehicle, vehicleIndex) => (
                <TableRow key={vehicle.id}>
                  {/* VEHICLE NAME */}
                  <th className={classes.vehicleNameCell}>
                    <Paper className={classes.vehicleNameContainer}>
                      { vehicle.name }
                    </Paper>
                  </th>

                  {/* VEHIICLE DAILY SCHEDULE */}
                  {
                    targetDates.map(today => {
                      /** Schedule for `vehicle` at current `date` */
                      const todaySchedule = scheduleScheme.find(s => moment(s.date).isSame(today, 'day'))?.schedule
                        .find(s => s.vehicleId === vehicle.id);
                      
                      const isFirstDayInMonth = today.date() === 1;
                      const driver = drivers.find(d => d.id === todaySchedule?.driverId);
                      console.log(scheduleScheme)

                      return (
                        <TableCell
                          data-month={vehicleIndex === 0 ? today.format('MMMM') : ''}
                          className={classnames(classes.cell, { [classes.divider]: isFirstDayInMonth })}
                          onClick={handleEditDateClick(today)}
                        >
                          <ScheduleDriverCell
                            driver={driver}
                            isMainDriver={todaySchedule?.isMainDriver}
                          />
                        </TableCell>
                      )
                    })
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
