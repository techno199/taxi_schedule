import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { ScheduleBody } from './schedule-body'
import { ScheduleFooter } from './schedule-footer'
import { ScheduleHeader } from './schedule-header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
    padding: 20
  }
}))

export default function Schedule() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <ScheduleHeader />
      <ScheduleBody />
      <ScheduleFooter />
    </Paper>
  )
}
