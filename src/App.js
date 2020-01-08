import React from 'react';
import classes from './App.module.scss';
import NumberToMemorize from './components/NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './components/MemorizedNumber/MemorizedNumber';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';


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

  changeMemorizedNumber = (num) => {
    this.setState({
      'MemorizedNumber': num
    });
  }

  timeChangeHandler = (num)=>{
    this.setState({
      'time': num
    });
  }
  
  isConfigPanelDisplayedChangeHandler = ()=>{
    let isDisplayed = this.state.isConfigPanelDisplayed;
    this.setState({
      'isConfigPanelDisplayed': !isDisplayed
    });
  }

  isSummaryDisplayedChangeHandler = (val)=>{
    this.setState({
      'isSummaryDisplayed': val
    });
  }

  lengthChangeHandler = (num)=>{
    this.setState({
      'digitCount': num
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
    let numberToMemorize = null;
    let memorizedNumber = null;
    let summary = null;

    if(this.state.timeIsUp){
      memorizedNumber = <MemorizedNumber 
        Number={this.state.number}
        checkHandler={this.checkMemorizedNumber}
        changeHandler={this.changeMemorizedNumber}
        MemorizedNumber={this.state.MemorizedNumber}/>
    }else{
      numberToMemorize = <NumberToMemorize 
        time={this.state.time}
        timeIsUp={this.timeIsUp}
        Number={this.state.number}/>
    }
    if(this.state.isSummaryDisplayed){
      summary = <Summary 
        summary={this.state.history} />
    }
    return (
      <div className={classes.App}>
        <Header time={this.state.time}
            timeChangeHandler={this.timeChangeHandler}
            lengthChangeHandler={this.lengthChangeHandler}
            digitCount={this.state.digitCount}
            isConfigPanelDisplayed={this.state.isConfigPanelDisplayed}
            isConfigPanelDisplayedChangeHandler = {this.isConfigPanelDisplayedChangeHandler}
            isSummaryDisplayed={this.state.isSummaryDisplayed}
            summary={this.state.history}
            isSummaryDisplayedChangeHandler = {this.isSummaryDisplayedChangeHandler}/>
        {numberToMemorize}
        {memorizedNumber}
        
        {summary}
      </div>
    );
  }
}


export default App;
