import React from 'react'
import {
  NavLink 
} from "react-router-dom";

import classes from  './BurgerMenu.module.scss';

function BurgerMenu (props){

  let burgerClasses = [classes["burger-menu"]];
  let burgerMenuItemClasses = [classes["burger-menu__link-item"]];
  let burgerMenuIconItemClasses = [classes["burger-menu__icon-item"]];
  let burgerLinkClasses = [classes["burger-menu__link"]];
  let SummaryLinkClasses;
  if( props.isChecked ){
    burgerClasses.push( classes['burger-menu--opened'] );
    burgerMenuItemClasses.push( classes['burger-menu__link-item--opened'] );
    burgerLinkClasses.push( classes['burger-menu__link--opened'] );
    burgerMenuIconItemClasses.push(classes['burger-menu__icon-item--opened']);
  }

  SummaryLinkClasses = [...burgerLinkClasses];
  if( props.isSummaryDisabled ){
    SummaryLinkClasses.push( classes['burger-menu__link--disabled'] );
  }

  return <span
    className={burgerClasses.join(' ')}
    onClick={props.onClickHandler}>
    <div className={burgerMenuIconItemClasses.join(' ')}></div>
    <div className={burgerMenuIconItemClasses.join(' ')}></div>
      
    <span className={burgerMenuItemClasses.join(' ')}>
        <NavLink 
          className={burgerLinkClasses.join(' ')} 
          activeClassName={classes['burger-menu__link--active']}
          to="/play">
            Play
        </NavLink>
    </span>
    <span className={burgerMenuItemClasses.join(' ')}>
        <NavLink 
          className={burgerLinkClasses.join(' ')} 
          activeClassName={classes['burger-menu__link--active']}
          to="/settings">
            Settings
        </NavLink>
    </span>
    <span className={burgerMenuItemClasses.join(' ')}>
      <NavLink 
        className={SummaryLinkClasses.join(' ')} 
        activeClassName={classes['burger-menu__link--active']}
        to="/summary">
          Summary
      </NavLink>
    </span>
  </span>
}

export default BurgerMenu;