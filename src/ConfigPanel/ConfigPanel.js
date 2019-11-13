import React from 'react'
import './ConfigPanel.css';

class ConfigPanel extends React.Component {
  onTimeChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.timeChangeHandler(parseFloat(value));
  }
  onLengthChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.lengthChangeHandler(value);
  }
  onIsConfigPanelDisplayedChangeHandler = (event)=>{
    const value = event.target.checked; 
    this.props.isConfigPanelDisplayedChangeHandler(value);
  }
  onIsSummaryDisplayedChangeHandler = (event)=>{
    const value = event.target.checked; 
    this.props.isSummaryDisplayedChangeHandler(value);
  }
  render() {
    let configPanel = '';
    if(this.props.isConfigPanelDisplayed){
      configPanel = <div className="config">
          <label className="config__label">
            I would like to see number to memorize with length of  
            <input 
              className="config__input"
              name="length" 
              type="number"
              onChange={this.onLengthChangeHandler} 
              value={this.props.length}/>
            digits
          </label>
          <label className="config__label">
            , and time of display number to memorize should be   
            <input 
              className="config__input"
              name="time" 
              type="number" min="0.5" max="10" step="0.5"
              onChange={this.onTimeChangeHandler} 
              value={this.props.time}/>
              seconds
          </label>
          <label className="config__label config__label--break">
            Show summary 
            <input 
              className="config__input"
              name="isSummaryDisplayed" 
              type="checkbox"
              onChange={this.onIsSummaryDisplayedChangeHandler} 
              checked={this.props.isSummaryDisplayed}/>
          </label>
        <label className="config__label config__label--break">
          Show configuration panel 
          <input 
            className="config__input"
            name="isConfigPanelDisplayed" 
            type="checkbox"
            onChange={this.onIsConfigPanelDisplayedChangeHandler} 
            checked={this.props.isConfigPanelDisplayed}/>
        </label>
        </div>
    }else{
      configPanel =  <div className="config">
        <label className="config__label">
          Show configuration panel 
          <input 
            className="config__input"
            name="isConfigPanelDisplayed" 
            type="checkbox"
            onChange={this.onIsConfigPanelDisplayedChangeHandler} 
            checked={this.props.isConfigPanelDisplayed}/>
        </label>
      </div>
    }
    return configPanel
  }
}

export default ConfigPanel;