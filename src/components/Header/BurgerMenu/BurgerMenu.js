import React from 'react'
import {
  Link
} from "react-router-dom";

import classes from  './BurgerMenu.module.scss';

function BurgerMenu (props){

  let burgerClasses = [classes["burger-menu"]];
  let burgerMenuItemClasses = [classes["burger-menu__link-item"]];
  let burgerMenuIconItemClasses = [classes["burger-menu__icon-item"]];
  let burgerLinkClasses = [classes["burger-menu__link"]];
  if( props.isChecked ){
    burgerClasses.push( classes['burger-menu--opened'] );
    burgerMenuItemClasses.push( classes['burger-menu__link-item--opened'] );
    burgerLinkClasses.push( classes['burger-menu__link--opened'] );
    burgerMenuIconItemClasses.push(classes['burger-menu__icon-item--opened']);
  }

  return <span
    className={burgerClasses.join(' ')}
    onClick={props.onClickHandler}>
    <div className={burgerMenuIconItemClasses.join(' ')}></div>
    <div className={burgerMenuIconItemClasses.join(' ')}></div>
      
    <span className={burgerMenuItemClasses.join(' ')}>
        <Link className={burgerLinkClasses.join(' ')} to="/play">Play</Link>
    </span>
    <span className={burgerMenuItemClasses.join(' ')}>
        <Link className={burgerLinkClasses.join(' ')} to="/settings">Settings</Link>
    </span>
    <span className={burgerMenuItemClasses.join(' ')}>
      <Link className={burgerLinkClasses.join(' ')} to="/summary">Summary</Link>
    </span>
  </span>
}

export default BurgerMenu;