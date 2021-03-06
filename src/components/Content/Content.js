import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import Summary from './Summary/Summary';
import FlowControls from './FlowControls/FlowControls';
import MessageBox from './MessageBox/MessageBox';
import ConfigPanel from './ConfigPanel/ConfigPanel';

import classes from './Content.module.scss';

function Content(props) {
  let message = '';
  let correctCount= 0;
  for( let i=props.history.length-1; i > 0 && i > props.history.length -20; i-- ){
    if(props.history[i].memorizedNumber === props.history[i].number ){
      correctCount ++;
    }else{
      break;
    }
  }

  switch(correctCount){
    case 5 :
      message = 'Well done. Keep Going!';
    break;
    case 10 :
      message = 'You got lucky!';
    break;
    case 20 :
      message = 'Your skill is awesome';
    break;
    case 35 :
      message = 'Dammit You are going to break this game!';
    break;
    case 50 :
      message = 'You just broke a game! stop playing !!!';
    break;
    default:
      message = '';
  }
  return <main className={classes.content}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/play" />
      </Route>
      <Route path="/play">
        { ( props.isAppStarted && ( props.timeIsUp ? <MemorizedNumber 
            number={props.number}
            checkHandler={props.checkMemorizedNumber}
            changeHandler={props.changeMemorizedNumber}
            memorizedNumber={props.memorizedNumber}/> 
        :<NumberToMemorize 
            time={props.time}
            timeIsUp={props.timeIsUpHandler}
            number={props.number}/> ) ) }
        <FlowControls
          refreshClickHandler={props.refreshClickHandler}
          refreshMaxCount={props.refreshMaxCount}
          playMemorizedNumber={props.playMemorizedNumber}
          refreshCount={props.refreshCount}
          isAppStarted={props.isAppStarted}
          stopMemorizedNumber={props.stopMemorizedNumber}
          resetMemorizedNumber={props.resetMemorizedNumber}
        />
      </Route>
      <Route path="/summary">
        { props.history.length === 0 ?
          <Redirect to="/play" />
          :<Summary 
          summary={props.history} /> }
      </Route>
      <Route path="/settings">
        <ConfigPanel
          time={props.time}
          timeChangeHandler={props.timeChangeHandler}
          lengthChangeHandler={props.lengthChangeHandler}
          length={props.length}
          isConfigPanelDisplayed={props.isConfigPanelDisplayed}
          IsConfigPanelDisplayedChangeHandler={props.isConfigPanelDisplayedChangeHandler}
          refreshMaxCountChangeHandler={props.refreshMaxCountChangeHandler}
          refreshMaxCount={props.refreshMaxCount}/>
      </Route>
    </Switch>
    { message && <MessageBox>{message}</MessageBox>}
  </main>
}

export default Content;