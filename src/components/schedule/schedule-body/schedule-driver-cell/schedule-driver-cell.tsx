import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import { IStatus } from '../../../../types/status';
import { IDriver } from '../../../../types/table-data'
import classnames from 'classnames';

export type IScheduleDriverCellProps = {
  driver?: IDriver;
  status?: IStatus;
  isMainDriver?: boolean;
  onClick?: () => any;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    cursor: 'pointer',
    backgroundColor: (props: IScheduleDriverCellProps) => `${props.status?.color} !important`
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
    transition: 'background-color .2s ease !important',
    backgroundColor: `${theme.palette.grey[300]} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.grey[500]} !important`,
      '& .driver': {
        background: theme.palette.grey[300]
      }
    }
  },
  driverNameRow: {
    height: 32,
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedText: {
    padding: '0 4px',
    borderRadius: 4,
    fontWeight: 500,
    transition: 'all .2s ease',
    background: theme.palette.grey[500],
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: 70,
  },
  status: {
    width: 10,
    height: '100%',
    
  }
}));

export default function ScheduleDriverCell(props: IScheduleDriverCellProps) {
  const { driver, status, isMainDriver = true, ...paperProps } = props;
  const classes = useStyles(props);

  return (
    <Paper className={classes.root} {...paperProps}>
      {/* DRIVER NAME */}
      <div className={classes.wrapper}>
        <div className={classes.driverNameRow}>
          {
            isMainDriver && (
              <span className={classnames(classes.selectedText, 'driver')}>{ driver?.name }</span>
            )
          }
        </div>

        <div className={classes.driverNameRow}>
          {
            !isMainDriver && (
              <span className={classnames(classes.selectedText, 'driver')}>{ driver?.name }</span>
            )
          }
        </div>

        <div className={classes.driverNameRow}>
          <span className={classes.selectedText} style={{ background: status?.color }}>{ status?.name }</span>
        </div>
      </div>
    </Paper>
  )
}
