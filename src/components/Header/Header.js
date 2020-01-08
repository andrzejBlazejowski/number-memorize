import React from 'react'
import ConfigPanel from './ConfigPanel/ConfigPanel';

import classes from './Header.module.scss';

class Header extends React.Component {
  render() {
    let headerClasses = classes.header + ' ';
    let headerBgPrefix = 'linear-gradient(90deg, ';
    let headerBgSuffix = ')';
    let headerBg = headerBgPrefix + this
      .props
      .summary
      .map((el, i, arr) => {
        let cellColor = 'var(--success-color)';
        if(el.MemorizedNumber !== el.number){
          cellColor = 'var(--fail-color)';
        }
        return cellColor + ' ' + 
          parseFloat(i / arr.length * 100).toFixed(2) + '%, ' + // calculate cell start
          cellColor + ' ' + 
          parseFloat((i + 1) / arr.length * 100).toFixed(2) + '%' + (arr.length - 1 === i
            ? ''
            : ', ') // calculate end of cell
      })  
      .join('') + headerBgSuffix;
    let headerStyles = {
      'background': headerBg
    };
    if (this.props.isConfigPanelDisplayed) {
      headerClasses += ' ' + classes['header--opened'];
    }
    return <header className={headerClasses}>
      <div style={headerStyles} className={classes.header__summary}></div>
      <h3>Numbers memorizing !</h3>
      <ConfigPanel
        time={this.props.time}
        timeChangeHandler={this.props.timeChangeHandler}
        lengthChangeHandler={this.props.lengthChangeHandler}
        length={this.props.digitCount}
        isConfigPanelDisplayed={this.props.isConfigPanelDisplayed}
        IsConfigPanelDisplayedChangeHandler={this.props.isConfigPanelDisplayedChangeHandler}
        isSummaryDisplayed={this.props.isSummaryDisplayed}
        isSummaryDisplayedChangeHandler={this.props.isSummaryDisplayedChangeHandler}/>
    </header>
  }
}

export default Header;