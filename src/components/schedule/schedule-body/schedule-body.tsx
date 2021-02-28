import { Chip, Fab, makeStyles, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Zoom } from '@material-ui/core';
import React from 'react'
import { IDriver, IScheduleScheme, ITableResponse, IVehicle } from '../../../types/table-data';
import ScheduleDriverCell from './schedule-driver-cell/schedule-driver-cell';
import moment from 'moment';
import classnames from 'classnames';
import { ArrowUpward, KeyboardReturn, Today } from '@material-ui/icons';
import { IStatus } from '../../../types/status';

// MISC
const rowHeight = 114;

export type IScheduleBodyProps = {
  isLoading: boolean;
  vehicles?: IVehicle[];
  drivers?: IDriver[];
  statuses?: IStatus[];
  scheduleScheme?: IScheduleScheme[];
  startDate: moment.Moment;
  renderDaysCount: number;
  vehicleNameCellWidth: number;
  onEditDateClick?: (date: moment.Moment, vehicleId: number, driverId?: number, statusId?: number) => any;
  onReturnToTodayClick?: () => any;
}

// CSS
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
    marginLeft: (props: IScheduleBodyProps) => props.vehicleNameCellWidth,
    position: 'relative',
    '& .MuiTableCell-root': {
      borderBottom: 'none',
    }
  },
  tableRoot: {
    tableLayout: 'fixed'
  },
  headerCell: {
    textAlign: 'center',
    fontSize: 'inherit',
    whiteSpace: 'nowrap',
    width: (props: IScheduleBodyProps) => `calc(100% / ${props.renderDaysCount})`
  },
  cell: {
    height: rowHeight,
    boxSizing: 'border-box',
    padding: 8,
    position: 'relative',
    fontSize: 'inherit'
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
    width: (props: IScheduleBodyProps) => props.vehicleNameCellWidth,
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
    alignItems: 'center',
    textAlign: 'center'
  },
  fab: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2)
  },
  skeleton: {
    transform: 'none !important'
  }
}));

export default function ScheduleBody(props: IScheduleBodyProps) {
  const { isLoading, scheduleScheme, vehicles, drivers, statuses, startDate, renderDaysCount = 7, onEditDateClick, onReturnToTodayClick } = props;
  const classes = useStyles(props);
  let skeletonVehicles: IVehicle[] = [
    { id: 0, name: '' },
    { id: 1, name: '' },
    { id: 2, name: '' }
  ];
  
  // FAB ZOOM THRESHOLD
  const fabLowerThreshold = moment().subtract(renderDaysCount * 2, 'days');
  const fabGreaterThreshold = moment().add(renderDaysCount, 'days');
  const fabVisible = startDate.isBefore(fabLowerThreshold) || startDate.isAfter(fabGreaterThreshold);

  // CREATE AN ARRAY OF DATES TO RENDER
  const endDate = moment(startDate).add(renderDaysCount, 'days');
  const targetDates: moment.Moment[] = [];
  for (let d = moment(startDate); d.isBefore(endDate); d.add(1, 'day')) {
    targetDates.push(moment(d));
  }

  const handleEditDateClick = (clickedDate: moment.Moment, vehicleId: number, driverId?: number, statusId?: number) => () => {
    onEditDateClick && onEditDateClick(clickedDate, vehicleId, driverId, statusId);
  }

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table className={classes.tableRoot}>
          {/* TABLE HEADER (DATES) */}
          <TableHead>
            <TableCell className={classes.vehicleNameCell}></TableCell>
            {
              targetDates.map(d => (
                <TableCell className={classes.headerCell}>
                  <span>{ d.format('DD, dd') } </span>
                  
                  {
                    d.isSame(moment(), 'day') && (
                      <Chip label='сегодня' size='small' color='secondary'></Chip>
                    )
                  }
                </TableCell>
              ))
            }
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {
              (vehicles || skeletonVehicles).map((vehicle: IVehicle, vehicleIndex) => (
                <TableRow key={vehicle.id}>
                  {/* VEHICLE NAME */}
                  <th className={classes.vehicleNameCell}>
                    {
                      isLoading && (
                        <Skeleton className={classes.skeleton} height='100%' />
                      )
                    }

                    {
                      !isLoading && (
                        <Paper className={classes.vehicleNameContainer}>
                          { vehicle.name }
                        </Paper>
                      )
                    }
                  </th>

                  {/* VEHIICLE DAILY SCHEDULE */}
                  {
                    targetDates.map(today => {
                      /** Schedule for `vehicle` at current `date` */
                      const todaySchedule = scheduleScheme?.find(s => moment(s.date).isSame(today, 'day'))?.schedule
                        .find(s => s.vehicleId === vehicle.id);
                      
                      const isFirstDayInMonth = today.date() === 1;
                      const driver = drivers?.find(d => d.id === todaySchedule?.driverId);
                      const status = statuses?.find(s => s.id === todaySchedule?.statusId); 

                      return (
                        <TableCell
                          data-month={vehicleIndex === 0 ? today.format('MMMM') : ''}
                          className={classnames(classes.cell, { [classes.divider]: isFirstDayInMonth })}
                        >
                          {
                            isLoading && (
                              <Skeleton className={classes.skeleton} height='100%' />
                            )
                          }
                          
                          {
                            !isLoading && (
                              <ScheduleDriverCell
                                driver={driver}
                                status={status}
                                isMainDriver={todaySchedule?.isMainDriver}
                                onClick={handleEditDateClick(today, vehicle.id, driver?.id, status?.id)}
                              />
                            )
                          }
                        </TableCell>
                      )
                    })
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

        <Zoom in={fabVisible}>
          <Fab
            className={classes.fab}
            color='secondary'
            style={{position: 'absolute'}}
            onClick={onReturnToTodayClick}
          >
            <ArrowUpward />
          </Fab>
        </Zoom>
      </TableContainer>
    </div>
  )
}
