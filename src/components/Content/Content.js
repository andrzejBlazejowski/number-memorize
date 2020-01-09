import React from 'react'
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import Summary from './Summary/Summary';
import FlowControls from './FlowControls/FlowControls';

import classes from './Content.module.scss';

class Content extends React.Component {
  render() {
    return <main className={classes.content}>
      {( this.props.timeIsUp ? <MemorizedNumber 
          Number={this.props.number}
          checkHandler={this.props.checkMemorizedNumber}
          changeHandler={this.props.changeMemorizedNumber}
          MemorizedNumber={this.props.MemorizedNumber}/> 
        : <NumberToMemorize 
            time={this.props.time}
            timeIsUp={this.props.timeIsUpHandler}
            Number={this.props.number}/>)}
      <FlowControls/>
      {this.props.isSummaryDisplayed && <Summary 
        summary={this.props.history} /> }
    </main>
  }
}

export default Content;