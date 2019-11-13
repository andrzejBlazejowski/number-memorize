import React from 'react';
import './App.css';
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import ConfigPanel from './ConfigPanel/ConfigPanel';
import Summary from './Summary/Summary';


class App extends React.Component {
  constructor(props){
    super(props);
    //this.time = 2;
    this.digitCount = 5;

    this.state = { 
      'number': this.getRandomNumber(this.digitCount),
      'MemorizedNumber': '',
      'time': 2,//[seconds]
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
  
  isConfigPanelDisplayedChangeHandler = (val)=>{
    console.log(val);
    this.setState({
      'isConfigPanelDisplayed': val
    });
  }

  isSummaryDisplayedChangeHandler = (val)=>{
    console.log(val);
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

  getRandomNumber=( length )=>{
    return Math.round(Math.random()*(Math.pow(10,length)))
  }

  timeIsUp = ()=>{
    this.setState({
      'timeIsUp': true
    });
  }

  render(){
    let numberToMemorize = '';
    let memorizedNumber = '';
    let summary = '';

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
      <div className="App">
        <h3 className="App__header">Numbers memorizing !</h3>
        {numberToMemorize}
        {memorizedNumber}
        <ConfigPanel
          time={this.state.time}
          timeChangeHandler={this.timeChangeHandler}
          lengthChangeHandler={this.lengthChangeHandler}
          length={this.state.digitCount}
          isConfigPanelDisplayed={this.state.isConfigPanelDisplayed}
          isConfigPanelDisplayedChangeHandler = {this.isConfigPanelDisplayedChangeHandler}
          isSummaryDisplayed={this.state.isSummaryDisplayed}
          isSummaryDisplayedChangeHandler = {this.isSummaryDisplayedChangeHandler}
          />
        {summary}
      </div>
    );
  }
}


export default App;
