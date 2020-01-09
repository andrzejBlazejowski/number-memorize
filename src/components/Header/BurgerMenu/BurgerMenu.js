import React from 'react'

import classes from  './BurgerMenu.module.scss';

function BurgerMenu (props){

  let burgerClasses = classes["burger-menu"];
  let burgerSpanClasses = classes["burger-menu__span"];
  if( props.isChecked ){
    burgerClasses += ' ' + classes['burger-menu--opened'];
    burgerSpanClasses += ' ' + classes['burger-menu__span--opened'];
  }

  return <span
    className={burgerClasses}
    onClick={props.onClickHandler} >
      <span className={burgerSpanClasses}></span>
      <span className={burgerSpanClasses}></span>
      <span className={burgerSpanClasses}></span>
  </span>
}

export default BurgerMenu;