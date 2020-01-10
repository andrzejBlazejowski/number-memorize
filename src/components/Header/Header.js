import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import classes from './Header.module.scss';
import Nav from './Nav/Nav';

function Header( props ) {
  let headerClasses = classes.header + ' ';
  let headerBgPrefix = 'linear-gradient(90deg, ';
  let headerBgSuffix = ')';
  let headerBg = headerBgPrefix + props
    .summary
    .map((el, i, arr) => {
      let cellColor = 'var(--success-color)';
      if(el.memorizedNumber !== el.number){
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
  if (props.isConfigPanelDisplayed) {
    headerClasses += ' ' + classes['header--opened'];
  }
  return <header className={headerClasses}>
    <div style={headerStyles} className={classes.header__summary}></div>
    <h3>Numbers memorizing !</h3>         
    <BurgerMenu 
      onClickHandler={props.isConfigPanelDisplayedChangeHandler} 
      isChecked={props.isConfigPanelDisplayed}/>
    {props.isConfigPanelDisplayed && <Nav/> }
  </header>

}

export default Header;