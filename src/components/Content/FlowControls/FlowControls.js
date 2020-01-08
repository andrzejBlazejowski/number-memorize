import React from 'react'

import classes from './FlowControls.module.scss';

class flowControls extends React.Component {
  render() {
    return <div className={classes['flow-controls']}>
      <button className={classes['flow-controls__button flow-controls__button--refresh']} type="button">refresh</button>
      <button className={classes['flow-controls__button flow-controls__button--play']} type="button">play</button>
      <button className={classes['flow-controls__button flow-controls__button--pause']} type="button">pause</button>
    </div>
  }
}

export default flowControls;