import React from 'react';
import './App.css';
import NumberToMemorize from './NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './MemorizedNumber/MemorizedNumber';
import ConfigPanel from './ConfigPanel/ConfigPanel';
import Summary from './Summary/Summary';


class App extends React.Component {
  constructor(props){
    super(props);
    this.time = 2000;
    this.digitCount = 5;

    this.state = { 
      'number': this.getRandomNumber(this.digitCount),
      'MemorizedNumber': '',
      'time': this.time,//[ms]
      'timeIsUp': false,
      'history': [],
      'digitCount': this.digitCount
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
      'time': this.time,//[ms]
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

    return (
      <div className="App">
        <h3 className="App-header">Numbers memorizing !</h3>
        {numberToMemorize}
        {memorizedNumber}
        <ConfigPanel 
          time={this.state.time}
          timeChangeHandler={this.timeChangeHandler}
          lengthChangeHandler={this.lengthChangeHandler}
          length={this.state.digitCount}/>
        <Summary 
            summary={this.state.history} />
      </div>
    );
  }
}

export default App;
