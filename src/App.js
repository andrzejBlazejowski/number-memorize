import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import classes from './App.module.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.digitCount = 5;

    this.state = {
      'isAppStarted': false,
      'number': this.getRandomNumber(this.digitCount),
      'MemorizedNumber': '',
      'time': 2,//[seconds]
      'refreshMaxCount': 3,
      'refreshCount': 0,
      'timeIsUp': false,
      'history': [],
      'digitCount': this.digitCount,
      'isConfigPanelDisplayed': false,
      'isSummaryDisplayed': false
     };
  }

  changeMemorizedNumber = (ev) => {
    const target = ev.target;
    const num = target.value;

    this.setState({
      'MemorizedNumber': num
    });
  }

  timeChangeHandler = (ev)=>{
    this.setState({
      'time': parseFloat(ev.target.value)
    });
  }
  
  isConfigPanelDisplayedChangeHandler = ()=>{
    this.setState({
      'isConfigPanelDisplayed': !this.state.isConfigPanelDisplayed
    });
  }

  isSummaryDisplayedChangeHandler = (val)=>{
    let isDisplayed = this.state.isSummaryDisplayed;
    this.setState({
      'isSummaryDisplayed': !isDisplayed
    });
  }

  lengthChangeHandler = (ev)=>{
    this.setState({
      'digitCount': ev.target.value
    });
  }

  checkMemorizedNumber = () => {
    let history = this.state.history;
    history.push({
      "MemorizedNumber": parseInt(this.state.MemorizedNumber),
      "number": parseInt(this.state.number)
    });
    this.setState({
      'number': this.getRandomNumber(this.state.digitCount),
      'MemorizedNumber': '',
      'timeIsUp': false,
      'history': history
    });
  }

  refreshMemorizedNumber = () =>{
    if( this.state.refreshCount < this.state.refreshMaxCount ){
      this.setState({
        'number': this.getRandomNumber(this.state.digitCount),
        'MemorizedNumber': '',
        'timeIsUp': false,
        'refreshCount': this.state.refreshCount+1
      });
    }
  }

  getRandomNumber=( length )=>{
    return Math.round(Math.random()*(Math.pow(10,length)))
  }

  timeIsUp = ()=>{
    this.setState({
      'timeIsUp': true
    });
  }

  render(){
    return (
      <div className={classes.App}>
        <Header 
          time={this.state.time}
          timeChangeHandler={this.timeChangeHandler}
          lengthChangeHandler={this.lengthChangeHandler}
          digitCount={this.state.digitCount}
          isConfigPanelDisplayed={this.state.isConfigPanelDisplayed}
          isConfigPanelDisplayedChangeHandler = {this.isConfigPanelDisplayedChangeHandler}
          isSummaryDisplayed={this.state.isSummaryDisplayed}
          summary={this.state.history}
          isSummaryDisplayedChangeHandler = {this.isSummaryDisplayedChangeHandler}
        />
        <Content
          timeIsUpHandler={this.timeIsUp}
          timeIsUp={this.state.timeIsUp}
          number={this.state.number}
          checkMemorizedNumber={this.checkMemorizedNumber}
          changeMemorizedNumber={this.changeMemorizedNumber}
          MemorizedNumber={this.state.MemorizedNumber}
          time={this.state.time}
          isSummaryDisplayed={this.state.isSummaryDisplayed}
          history={this.state.history}
          refreshClickHandler={this.refreshMemorizedNumber}
          refreshMaxCount={this.state.refreshMaxCount}
          refreshCount={this.state.refreshCount}
        />
      </div>
    );
  }
}

export default App;