import { Button, makeStyles } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

export default function ScheduleDatepicker() {
  const classes = useStyles();

  return (
    <div>
      <Button>
        <ArrowLeft />
      </Button>
      
      <Button>
        <ArrowRight />
      </Button>
    </div>
  )
}
