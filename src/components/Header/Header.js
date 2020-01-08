import React from 'react'
import ConfigPanel from './ConfigPanel/ConfigPanel';

import classes from './Header.css';

class Header extends React.Component {
  onClickHandler = (event)=>{
    let isChecked = this.props.isChecked;

    this.props.onClickHandler( !isChecked );
  }
  render() {
    let headerClasses = classes.header;
    let headerBgPrefix = 'linear-gradient(90deg, ';
    let headerBgSuffix = ')';
    let headerBg = headerBgPrefix + this.props.summary.map( (el, i, arr)=>{
      return (el.MemorizedNumber === el.number ? 'var(--success-color)': 'var(--fail-color)') + ' ' + 
        parseFloat(i/arr.length*100).toFixed(2) + '%, ' + 
        (el.MemorizedNumber === el.number ? 'var(--success-color)': 'var(--fail-color)') + ' ' + 
        parseFloat((i+1)/arr.length*100).toFixed(2) +'%' + (arr.length-1 === i ? '':', ')
      }).join('')+headerBgSuffix;
    let headerStyles={
      'background': headerBg
    };
    if( this.props.isConfigPanelDisplayed ){
      headerClasses += " "+ classes['header--opened'];
    }
    debugger;


    return <header className={headerClasses}>
      <div style={headerStyles} className={classes.header__summary}></div>
      <h3>Numbers memorizing !</h3>
      <ConfigPanel
        time={this.props.time}
        timeChangeHandler={this.props.timeChangeHandler}
        lengthChangeHandler={this.props.lengthChangeHandler}
        length={this.props.digitCount}
        isConfigPanelDisplayed={this.props.isConfigPanelDisplayed}
        isConfigPanelDisplayedChangeHandler = {this.props.isConfigPanelDisplayedChangeHandler}
        isSummaryDisplayed={this.props.isSummaryDisplayed}
        isSummaryDisplayedChangeHandler = {this.props.isSummaryDisplayedChangeHandler}
        />
    </header>
  }
}

export default Header;