import React from 'react'
import classes from './MemorizedNumber.module.scss';

class MemorizedNumber extends React.Component {
  constructor(props){
    super(props);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.memorizedInput = React.createRef();
  }
  componentDidMount =()=>{
    this.memorizedInput.current.focus();
  }
  onChangeHandler (event){
    const target = event.target;
    const value = target.value;
    this.props.changeHandler(value);
  }
  onKeyPressHandler (event){
    if( event.charCode === 13 ){
      this.props.checkHandler();
    }
  }
  render() {
    return <input 
      ref={this.memorizedInput}
      placeholder="Type in Memorized Number" 
      onKeyPress={this.onKeyPressHandler} 
      className={classes["memorized-number"]}
      onChange={this.onChangeHandler}
      type="text"
      value={this.props.MemorizedNumber}
    />;
  }
}

export default MemorizedNumber;