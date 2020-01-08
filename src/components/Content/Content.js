import React from 'react'
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import Summary from './Summary/Summary';
import FlowControls from './FlowControls/FlowControls';

import classes from './Content.module.scss';

class content extends React.Component {
  render() {
    let numberToMemorize = null;
    let memorizedNumber = null;
    let summary = null;

    if(this.props.timeIsUp){
      memorizedNumber = <MemorizedNumber 
        Number={this.props.number}
        checkHandler={this.props.checkMemorizedNumber}
        changeHandler={this.props.changeMemorizedNumber}
        MemorizedNumber={this.props.MemorizedNumber}/>
    }else{
      numberToMemorize = <NumberToMemorize 
        time={this.props.time}
        timeIsUp={this.props.timeIsUpHandler}
        Number={this.props.number}/>
    }
    if(this.props.isSummaryDisplayed){
      summary = <Summary 
        summary={this.props.history} />
    }
    return <main className={classes.content}>
      {numberToMemorize}
      {memorizedNumber}
      <FlowControls/>
      {summary}
    </main>
  }
}

export default content;