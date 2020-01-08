import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import classes from './ConfigPanel.module.scss';

class ConfigPanel extends React.Component {
  onTimeChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.timeChangeHandler(parseFloat(value));
  }
  onLengthChangeHandler = (event)=>{
    const value = event.target.value; 
    this.props.lengthChangeHandler(value);
  }
  onIsSummaryDisplayedChangeHandler = (event)=>{
    const value = event.target.checked; 
    this.props.isSummaryDisplayedChangeHandler(value);
  }
  render() {
    let configPanel = '';
    if(this.props.isConfigPanelDisplayed){
      configPanel = <div className={classes.config + ' ' + classes['config--opened']}>
          <label className={classes.config__label + ' ' + classes['config__label--break']}>
            I would like to see number to memorize with length of  
            <input 
              className={classes.config__input}
              name="length" 
              type="number"
              onChange={this.onLengthChangeHandler} 
              value={this.props.length}/>
            digits
          </label>
          <label className={classes.config__label + ' ' + classes['config__label--break']}>
            , and time of display number to memorize should be   
            <input 
              className={classes.config__input}
              name="time" 
              type="number" min="0.5" max="10" step="0.5"
              onChange={this.onTimeChangeHandler} 
              value={this.props.time}/>
              seconds
          </label>
          <label className={classes.config__label + ' ' + classes['config__label--break']}>
            Show summary 
            <input 
              className={classes.config__input}
              name="isSummaryDisplayed" 
              type="checkbox"
              onChange={this.onIsSummaryDisplayedChangeHandler} 
              checked={this.props.isSummaryDisplayed}/>
          </label>
          <BurgerMenu 
            onClickHandler={this.props.IsConfigPanelDisplayedChangeHandler} 
            isChecked={this.props.isConfigPanelDisplayed}/>
        </div>
    }else{
      configPanel =  <div className={classes.config}>
        <BurgerMenu 
          onClickHandler={this.props.IsConfigPanelDisplayedChangeHandler} 
          isChecked={this.props.isConfigPanelDisplayed}/> 
      </div>
    }
    return configPanel
  }
}

export default ConfigPanel;