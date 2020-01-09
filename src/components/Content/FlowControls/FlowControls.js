import React from 'react'
import classes from './FlowControls.module.scss';

class FlowControls extends React.Component {
  render() {
    let refreshClasses = [classes.button, classes.refresh];
    if( this.props.disabled ){
      refreshClasses.push(classes.disabled);
    }
    return <div className={classes.flowControls}>
      <button className={refreshClasses.join(' ')} >refresh</button>
      <button className={[classes.button, classes.play].join(' ')} >play</button>
      <button className={[classes.button, classes.pause].join(' ')} >pause</button>
    </div>
  }
}

export default FlowControls;