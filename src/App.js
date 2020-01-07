import React from 'react';
import './App.css';
import NumberToMemorize from './components/NumberToMemorize/NumberToMemorize';
import MemorizedNumber from './components/MemorizedNumber/MemorizedNumber';
// import ConfigPanel from './components/ConfigPanel/ConfigPanel';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';


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
    this.setState({
      'isConfigPanelDisplayed': val
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
    /*let headerClasses = 'App__header';
    if( this.state.isConfigPanelDisplayed ){
      headerClasses += ' App__header--opened';
    }*/

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
        {/* <header className={headerClasses}>
          <h3>Numbers memorizing !</h3>
          <ConfigPanel
            time={this.state.time}
            timeChangeHandler={this.timeChangeHandler}
            lengthChangeHandler={this.lengthChangeHandler}
            digitCount={this.state.digitCount}
            isConfigPanelDisplayed={this.state.isConfigPanelDisplayed}
            isConfigPanelDisplayedChangeHandler = {this.isConfigPanelDisplayedChangeHandler}
            isSummaryDisplayed={this.state.isSummaryDisplayed}
            isSummaryDisplayedChangeHandler = {this.isSummaryDisplayedChangeHandler}
            />
        </header> */}
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
