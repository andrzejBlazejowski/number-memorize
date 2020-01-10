import React from 'react'

import classes from './ConfigPanel.module.scss';

function ConfigPanel (props){
  let configClasses = [classes.config];
  if(props.isConfigPanelDisplayed){
    configClasses.push(classes['config--opened']);
  }
  
  return <div className={configClasses}>
      <label className={classes.config__label + ' ' + classes['config__label--break']}>
        I would like to see number to memorize with length of  
        <input 
          className={classes.config__input}
          name="length" 
          type="number"
          onChange={props.lengthChangeHandler} 
          value={props.length}/>
        digits
      </label>
      <label className={classes.config__label + ' ' + classes['config__label--break']}>
        , and time of display number to memorize should be   
        <input 
          className={classes.config__input}
          name="time" 
          type="number" min="0.5" max="10" step="0.5"
          onChange={props.timeChangeHandler} 
          value={props.time}/>
          seconds
      </label>
  </div>
}

export default ConfigPanel;