import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import Nav from './Nav/Nav';
import HeaderSummary from './HeaderSummary/HeaderSummary';

import classes from './Header.module.scss';

function Header( props ) {
  let headerClasses = [classes.header];
  if (props.isNavDisplayed) {
    headerClasses.push(classes['header--opened']);
  } 
  return <header className={headerClasses.join(' ')}>
    <HeaderSummary
      summary={props.summary}
    />
    <h3>Numbers memorizing !</h3> 
    <BurgerMenu
      onClickHandler={props.isNavDisplayedChangeHandler}
      isChecked={props.isNavDisplayed}/>
  </header>

}

export default Header;