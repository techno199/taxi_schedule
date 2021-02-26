import { Box, Button, makeStyles } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export type IScheduleFooterArrowClickEvent = {
  direction: 'prev' | 'next';
}

export type IScheduleFooterProps = {
  onArrowClick?: (e: IScheduleFooterArrowClickEvent) => any;
}

export default function ScheduleFooter(props: IScheduleFooterProps) {
  const classes = useStyles();
  const { onArrowClick } = props;

  const handleArrowClick = (direction: 'prev' | 'next') => () => {
    onArrowClick && onArrowClick({ direction });
  }
  
  return (
    <div className={classes.root}>
      <Box display='flex' justifyContent='space-between' width={150}>
        <Button variant='contained' onClick={handleArrowClick('prev')}>
          <ArrowLeft />
        </Button>

        <Button variant='contained' onClick={handleArrowClick('next')}>
          <ArrowRight />
        </Button>
      </Box>
    </div>
  )
}
