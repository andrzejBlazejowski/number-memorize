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
    this.state = {
      'isAppStarted': false,
      'number': 0,
      'memorizedNumber': '',
      'time': 2,//[seconds]
      'refreshMaxCount': 3,
      'refreshCount': 0,
      'timeIsUp': false,
      'history': [],
      'digitCount': 5,
      'isNavDisplayed': false
     };
  }

  changeMemorizedNumber = (ev) => {
    const target = ev.target;
    const num = target.value;
    this.setState({
      'memorizedNumber': num
    });
  }

  timeChangeHandler = (ev)=>{
    this.setState({
      'time': parseFloat(ev.target.value)
    });
  }
  
  isNavDisplayedChangeHandler = ()=>{
    this.setState({
      'isNavDisplayed': !this.state.isNavDisplayed
    });
  }

  lengthChangeHandler = (ev)=>{
    this.setState({
      'digitCount': ev.target.value
    });
  }

  checkMemorizedNumber = () => {
    let history = [...this.state.history];
    history.push({
      "memorizedNumber": parseInt(this.state.memorizedNumber),
      "number": parseInt(this.state.number)
    });
    this.setState({
      'number': this.getRandomNumber(this.state.digitCount),
      'memorizedNumber': '',
      'timeIsUp': false,
      'history': history
    });
  }

  refreshMemorizedNumber = () =>{
    if( this.state.refreshCount < this.state.refreshMaxCount ){
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
          />
        </div>
    );
  }
}

export default withRouter(props => <App {...props} />);