import React from 'react'
import classes from './FlowControls.module.scss';

function FlowControls(props) {
  let refreshClasses = [classes.button, classes.refresh];
  if( props.disabled ){
    refreshClasses.push(classes.disabled);
  }
  return (
    <div className={classes.flowControls}>
      { props.refreshMaxCount > props.refreshCount && <button 
        className={refreshClasses.join(' ')} 
        onClick={props.refreshClickHandler} 
        >refresh</button>}
      <button className={[classes.button, classes.play].join(' ')} >play</button>
      <button className={[classes.button, classes.pause].join(' ')} >pause</button>
    </div>
  )
}

export default FlowControls;