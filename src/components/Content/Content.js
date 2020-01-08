import React from 'react'
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import Summary from './Summary/Summary';

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
    return <main>
      {numberToMemorize}
      {memorizedNumber}
      {summary}
    </main>
  }
}

export default content;