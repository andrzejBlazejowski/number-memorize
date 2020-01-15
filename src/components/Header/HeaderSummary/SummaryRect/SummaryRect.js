import React from 'react';

import classes from './SummaryRect.module.scss';

function SummaryRect(props) {
  let rectClasses = [ classes.summary__item ];

  switch(props.type){
    case 'correct' : 
      rectClasses.push( classes['summary__item--correct'] );
      break;
    case 'incorrect' : 
      rectClasses.push( classes['summary__item--incorrect'] );
      break;
    default : 
      rectClasses.push( classes['summary__item--'+props.type] );
      break;
  }

  return <rect className={rectClasses.join(' ')} x={props.xOffset} width={props.rectWidth} height={props.rectHeight}/>
}

export default SummaryRect;