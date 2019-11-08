import React from 'react'
import './ConfigPanel.css';

class ConfigPanel extends React.Component {
  onTimeChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.timeChangeHandler(value);
  }
  onLengthChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.lengthChangeHandler(value);
  }
  render() {
    return <div>
      <label>
        Display time for number to memorize : 
        <input 
          name="time" 
          type="number" 
          onChange={this.onTimeChangeHandler} 
          value={this.props.time}/>
      </label>
      <label>
        Length of number to memorize : 
        <input 
          name="length" 
          type="number" 
          onChange={this.onLengthChangeHandler} 
          value={this.props.length}/>
      </label>
    </div>
  }
}

export default ConfigPanel;