import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import Nav from './Nav/Nav';
import Summary from './Summary/Summary';

import classes from './Header.module.scss';

function Header( props ) {
  let headerClasses = [classes.header];
  if (props.isConfigPanelDisplayed) {
    headerClasses.push(classes['header--opened']);
  } 
  return <header className={headerClasses.join(' ')}>
    <Summary
      summary={props.summary}
    /> 
    <h3>Numbers memorizing !</h3> 
    <BurgerMenu
      onClickHandler={props.isConfigPanelDisplayedChangeHandler}
      isChecked={props.isConfigPanelDisplayed}/>
    { props.isConfigPanelDisplayed && <Nav/> }
  </header>

}

export default Header;