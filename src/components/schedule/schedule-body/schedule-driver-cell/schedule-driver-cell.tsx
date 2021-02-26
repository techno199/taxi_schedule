import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import { IDriver } from '../../../../types/table-data'

export type IScheduleDriverCellProps = {
  driver?: IDriver;
  isMainDriver?: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: `${theme.palette.grey[300]} !important`,
  },
  driverNameRow: {
    height: 32,
    '&:first-child': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  driverName: {
    padding: '0 4px',
    borderRadius: 4,
    fontWeight: 500,
    background: theme.palette.grey[500],
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: 70,
  }
}));

export default function ScheduleDriverCell(props: IScheduleDriverCellProps) {
  const { driver, isMainDriver = true } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.driverNameRow}>
        {
          isMainDriver && (
            <span className={classes.driverName}>{ driver?.name }</span>
          )
        }
      </div>

      <div className={classes.driverNameRow}>
        {
          !isMainDriver && (
            <span className={classes.driverName}>{ driver?.name }</span>
          )
        }
      </div>
    </Paper>
  )
}
