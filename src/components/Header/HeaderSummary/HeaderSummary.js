import React from 'react';
import SummaryRect from './SummaryRect/SummaryRect';

import classes from './HeaderSummary.module.scss';

function HeaderSummary(props) {
  let viewportWidth = window.innerWidth;
  let summary = props.summary.slice(-20);
  let rectWidth = parseFloat( viewportWidth / summary.length ).toFixed(2);
  
  let rects = summary.map( (el, i) => {
    let rectType = "correct";
    if(el.memorizedNumber !== el.number){
      rectType = "incorrect";
    }
    return <SummaryRect 
      key={el.memorizedNumber + " " + i}
      type={rectType}
      rectWidth={rectWidth}
      rectHeight={15}
      xOffset={rectWidth * i}/>
  });

  return <svg 
    className={classes.summary} 
    viewBox={"0 0 " + viewportWidth + " 15"} 
    >
    {rects}
  </svg>
}

export default HeaderSummary;