import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Schedule } from './components/schedule';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 500,
    width: '100%',
    boxSizing: 'border-box',
    padding: 20
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Schedule />
    </div>
  );
}

export default App;
