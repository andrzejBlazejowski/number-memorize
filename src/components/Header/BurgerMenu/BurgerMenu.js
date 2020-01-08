import React from 'react'

import classes from  './BurgerMenu.module.scss';

class BurgerMenu extends React.Component {
  render() {
    let burgerClasses = classes["burger-menu"];
    let burgerSpanClasses = classes["burger-menu__span"];
    if( this.props.isChecked ){
      burgerClasses += ' ' + classes['burger-menu--opened'];
      burgerSpanClasses += ' ' + classes['burger-menu__span--opened'];
    }

    return <span
      className={burgerClasses}
      onClick={this.props.onClickHandler} >
        <span className={burgerSpanClasses}></span>
        <span className={burgerSpanClasses}></span>
        <span className={burgerSpanClasses}></span>
      </span>
  }
}

export default BurgerMenu;