import React from 'react'
import './ConfigPanel.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

class ConfigPanel extends React.Component {
  onTimeChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.timeChangeHandler(parseFloat(value));
  }
  onLengthChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.lengthChangeHandler(value);
  }
  onIsConfigPanelDisplayedChangeHandler = (value)=>{
    this.props.isConfigPanelDisplayedChangeHandler(value);
  }
  onIsSummaryDisplayedChangeHandler = (event)=>{
    const value = event.target.checked; 
    this.props.isSummaryDisplayedChangeHandler(value);
  }
  render() {
    let configPanel = '';
    if(this.props.isConfigPanelDisplayed){
      configPanel = <div className="config config--opened">
          <label className="config__label config__label--break">
            I would like to see number to memorize with length of  
            <input 
              className="config__input"
              name="length" 
              type="number"
              onChange={this.onLengthChangeHandler} 
              value={this.props.length}/>
            digits
          </label>
          <label className="config__label config__label--break">
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
          <BurgerMenu 
            onClickHandler={this.onIsConfigPanelDisplayedChangeHandler} 
            isChecked={this.props.isConfigPanelDisplayed}/> 
          {/* <input 
            className="config__input"
            name="isConfigPanelDisplayed" 
            type="checkbox"
            onChange={this.onIsConfigPanelDisplayedChangeHandler} 
            checked={this.props.isConfigPanelDisplayed}/> */}
        </div>
    }else{
      configPanel =  <div className="config">
        <BurgerMenu 
          onClickHandler={this.onIsConfigPanelDisplayedChangeHandler} 
          isChecked={this.props.isConfigPanelDisplayed}/> 
          {/* <input 
            className="config__input"
            name="isConfigPanelDisplayed" 
            type="checkbox"
            onChange={this.onIsConfigPanelDisplayedChangeHandler} 
            checked={this.props.isConfigPanelDisplayed}/> */}
      </div>
    }
    return configPanel
  }
}

export default ConfigPanel;