import React from 'react';
import {
  withRouter
} from "react-router-dom";
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import classes from './App.module.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    let time = localStorage.getItem('displayTime');
    let digitCount = localStorage.getItem('digitCount');
    let history = JSON.parse(localStorage.getItem('history'));
    let refreshCount = localStorage.getItem('refreshCount');
    let refreshMaxCount = localStorage.getItem('refreshMaxCount');
    time = time ? time : 2;
    digitCount = digitCount ? digitCount : 5;
    history = history ? history : [];
    refreshCount = refreshCount ? refreshCount : 0;
    refreshMaxCount = refreshMaxCount ? refreshMaxCount : 3;
    
    this.state = {
      'isAppStarted': false,
      'number': 0,
      'memorizedNumber': '',
      'time': time,//[seconds]
      'refreshMaxCount': refreshMaxCount,
      'refreshCount': refreshCount,
      'timeIsUp': false,
      'history': history,
      'digitCount': digitCount,
      'isNavDisplayed': false
     };
  }

  timeout4ParseHistory = null;

  changeMemorizedNumber = (ev) => {
    const target = ev.target;
    const num = target.value;
    this.setState({
      'memorizedNumber': num
    });
  }

  timeChangeHandler = (ev)=>{
    let time = ev.target.value
    localStorage.setItem('displayTime',time);
    this.setState({
      'time': parseFloat(time)
    });
  }
  
  isNavDisplayedChangeHandler = ()=>{
    this.setState({
      'isNavDisplayed': !this.state.isNavDisplayed
    });
  }

  lengthChangeHandler = (ev)=>{
    let digitCount = ev.target.value;
    localStorage.setItem('digitCount',digitCount);
    this.setState({
      'digitCount': digitCount
    });
  }

  refreshMaxCountChangeHandler = (ev) =>{
    let refreshMaxCount = ev.target.value;
    localStorage.setItem('refreshMaxCount', refreshMaxCount);
    this.setState({
      'refreshMaxCount': refreshMaxCount
    });
  }

  checkMemorizedNumber = () => {
    let history = [...this.state.history];
    history.push({
      "memorizedNumber": parseInt(this.state.memorizedNumber),
      "number": parseInt(this.state.number)
    });
    
    window.clearTimeout( this.timeout4ParseHistory );
    this.timeout4ParseHistory = window.setTimeout( ()=>{
      localStorage.setItem('history', JSON.stringify(history));
    }, 5*this.state.time*1000);

    this.setState({
      'number': this.getRandomNumber(this.state.digitCount),
      'memorizedNumber': '',
      'timeIsUp': false,
      'history': history
    });
  }

  refreshMemorizedNumber = () =>{
    if( this.state.refreshCount < this.state.refreshMaxCount ){
      localStorage.getItem('refreshCount', this.state.refreshCount+1);
      this.setState({
        'number': this.getRandomNumber(this.state.digitCount),
        'memorizedNumber': '',
        'timeIsUp': false, 
        'refreshCount': this.state.refreshCount+1
      });
    }
  }

  playMemorizedNumber = () =>{
    if( this.state.refreshCount < this.state.refreshMaxCount ){
      this.setState({
        'number': this.getRandomNumber(this.state.digitCount),
        'memorizedNumber': '',
        'timeIsUp': false,
        'isAppStarted': true
      });
    }
  }

  stopMemorizedNumber = () =>{
    if( this.state.refreshCount < this.state.refreshMaxCount ){
      this.setState({
        'isAppStarted': false
      });
    }
  }

  resetMemorizedNumber = () =>{
    localStorage.setItem('history',[]);
    localStorage.setItem('refreshCount',0);

    this.setState({
      ...this.state,
      'isAppStarted': false,
      'number': 0,
      'memorizedNumber': '',
      'refreshCount': 0,
      'timeIsUp': false,
      'history': []
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

  componentDidUpdate( prevProps ){
    if( this.props.location.pathname !== prevProps.location.pathname ){
      this.setState({
        'isNavDisplayed': false
      });
    }
  }

  render(){
    return (
        <div className={classes.App}>
          <Header
            isNavDisplayed={this.state.isNavDisplayed}
            isNavDisplayedChangeHandler = {this.isNavDisplayedChangeHandler}
            isSummaryDisplayed={this.state.isSummaryDisplayed}
            summary={this.state.history}
          />
          <Content
            timeIsUpHandler={this.timeIsUp}
            timeIsUp={this.state.timeIsUp}
            number={this.state.number}
            checkMemorizedNumber={this.checkMemorizedNumber}
            changeMemorizedNumber={this.changeMemorizedNumber}
            memorizedNumber={this.state.memorizedNumber}
            time={this.state.time}
            history={this.state.history}
            refreshClickHandler={this.refreshMemorizedNumber}
            refreshMaxCount={this.state.refreshMaxCount}
            refreshCount={this.state.refreshCount}
            isAppStarted={this.state.isAppStarted}
            playMemorizedNumber={this.playMemorizedNumber}
            stopMemorizedNumber={this.stopMemorizedNumber}
            lengthChangeHandler={this.lengthChangeHandler}
            length={this.state.digitCount}
            timeChangeHandler={this.timeChangeHandler}
            resetMemorizedNumber={this.resetMemorizedNumber}
            refreshMaxCountChangeHandler={this.refreshMaxCountChangeHandler}
            refreshMaxCount={this.state.refreshMaxCount}
          />
        </div>
    );
  }
}

export default withRouter(props => <App {...props} />);