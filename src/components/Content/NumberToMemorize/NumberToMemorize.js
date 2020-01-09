import React from 'react'
import classes from './NumberToMemorize.module.scss';

class NumberToMemorize extends React.Component {
  constructor(props){
    super(props);
    setTimeout( this.props.timeIsUp, this.props.time* 1000 );
  }
  render() {
    return <p 
      className={classes["number-to-memorize"]}>
      {this.props.Number}
    </p>;
  }
}

export default NumberToMemorize;