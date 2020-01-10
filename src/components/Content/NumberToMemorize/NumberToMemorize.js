import React, { useRef, useEffect } from 'react'
import classes from './NumberToMemorize.module.scss';

// class NumberToMemorize extends React.Component {
//   componentDidMount(){
//     setTimeout( this.props.timeIsUp, this.props.time* 1000 );
//   }
//   render() {
//     return <p 
//       className={classes["number-to-memorize"]}>
//       {this.props.Number}
//     </p>;
//   }
// }

const NumberToMemorize = ({timeIsUp, time, number}) => {
  const refTimeout = useRef(null);
  useEffect(() => {
        refTimeout.current = setTimeout( timeIsUp, time* 1000 );
    return () => {
      clearTimeout(refTimeout.current);
    };
  }, [timeIsUp, time]); 
  return (<p 
      className={classes["number-to-memorize"]}>
      {number}
    </p>);
}

export default NumberToMemorize;