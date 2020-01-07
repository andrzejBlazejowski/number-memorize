import React from 'react'
import './BurgerMenu.css';

class BurgerMenu extends React.Component {
  onClickHandler = (event)=>{
    let isChecked = this.props.isChecked;

    this.props.onClickHandler( !isChecked );
  }
  render() {
    let burgerClasses = "burger-menu";
    let burgerSpanClasses = "burger-menu__span";
    if( this.props.isChecked ){
      burgerClasses += ' burger-menu--opened'
      burgerSpanClasses += ' burger-menu__span--opened'
    }

    return <span
      className={burgerClasses}
      onClick={this.onClickHandler} >
        <span className={burgerSpanClasses}></span>
        <span className={burgerSpanClasses}></span>
        <span className={burgerSpanClasses}></span>
      </span>
  }
}

export default BurgerMenu;