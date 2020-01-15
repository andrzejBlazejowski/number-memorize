import React from 'react'
import classes from './FlowControls.module.scss';

function FlowControls(props) {
  let refreshClasses = [classes.button, classes.refresh];
  if( props.disabled ){
    refreshClasses.push(classes.disabled);
  }
  return (
    <div className={classes.flowControls}>
      {props.refreshMaxCount > props.refreshCount && <div className={classes.refreshContainer}>
        <button
          className={refreshClasses.join(' ')}
          onClick={props.refreshClickHandler}
        >refresh</button> 
        <div className={classes.counter}>
          <div>{props.refreshMaxCount - props.refreshCount}</div>
          <div>left</div>
        </div>
      </div>}
      { ! props.isAppStarted && <button
          className={[classes.button, classes.play].join(' ')}
          onClick={props.playMemorizedNumber}
        >play</button>}
      {/*
      i need to rethink what "PAUSE" button should do......
      (props.isAppStarted ?
        <button
          className={[classes.button, classes.pause].join(' ')}
          onClick={props.stopMemorizedNumber}
        >pause</button>
      :<button
          className={[classes.button, classes.play].join(' ')}
          onClick={props.playMemorizedNumber}
        >play</button>
      )*/}
    </div>
  )
}

export default FlowControls;