import React from 'react'
import classes from './MemorizedNumber.module.scss';

class MemorizedNumber extends React.Component {
  constructor(props){
    super(props);
    this.memorizedInput = React.createRef();
  }
  componentDidMount =()=>{
    this.memorizedInput.current.focus();
  }
  onKeyPressHandler = event => {
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
      onChange={this.props.changeHandler}
      type="number"
      value={this.props.memorizedNumber}
    />;
  }
}

export default MemorizedNumber;