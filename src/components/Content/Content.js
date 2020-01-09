import React from 'react'
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import Summary from './Summary/Summary';
import FlowControls from './FlowControls/FlowControls';

import classes from './Content.module.scss';

function Content(props) {
  return <main className={classes.content}>
    {( props.timeIsUp ? <MemorizedNumber 
        Number={props.number}
        checkHandler={props.checkMemorizedNumber}
        changeHandler={props.changeMemorizedNumber}
        MemorizedNumber={props.MemorizedNumber}/> 
    :<NumberToMemorize 
        time={props.time}
        timeIsUp={props.timeIsUpHandler}
        Number={props.number}/>)}
    <FlowControls
      refreshClickHandler={props.refreshClickHandler}
      refreshMaxCount={props.refreshMaxCount}
      refreshCount={props.refreshCount}/>
    {props.isSummaryDisplayed && <Summary 
      summary={props.history} /> }
  </main>
}

export default Content;