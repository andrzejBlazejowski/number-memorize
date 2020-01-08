import React from 'react'
import classes from './Summary.module.scss';

class Summary extends React.Component {
  constructor( props ){
    super(props);
    this.updateComponentValues(props);
  }

  componentDidUpdate(){
    this.updateComponentValues(this.props);    
  }

  updateComponentValues = (props) => {
    this.history = [...props.summary]; // create copy of props

    this.items = this.getSummaryItems(this.history);

    this.count = this.history.length;

    this.correctCount = this.history.reduce( (previousValue, currentValue) =>  
      previousValue + (currentValue.number === currentValue.MemorizedNumber?1:0),0);
    this.correctPercentages = Math.floor(this.correctCount*100/this.count);
    this.correctPercentages = this.correctPercentages? this.correctPercentages:0;

    this.incorrectCount = this.history.reduce( (previousValue, currentValue) =>  
      previousValue + (currentValue.number !== currentValue.MemorizedNumber && currentValue.MemorizedNumber?1:0),0);
    this.incorrectPercentages = Math.floor(this.incorrectCount*100/this.count);
    this.incorrectPercentages = this.incorrectPercentages? this.incorrectPercentages:0;

    this.emptyCount =  this.history.reduce( (previousValue, currentValue) =>  
     previousValue + (!currentValue.MemorizedNumber?1:0),0);
    this.emptyPercentages = Math.floor(this.emptyCount*100/this.count);
    this.emptyPercentages = this.emptyPercentages? this.emptyPercentages:0;
  }

  getSummaryItems = (items) => items.reverse().map((item)=><li key={item.number} 
        className={item.number===item.MemorizedNumber?
          classes.summary__item + ' '+ classes['summary__item--correct']
        : classes.summary__item + ' '+ classes['summary__item--inCorrect']}>
        <span>{item.number}</span>
        <span>{item.MemorizedNumber?item.MemorizedNumber:classes.empty}</span>
      </li>);

  render() {
    return <div className={classes.summary}>
        <div className={classes.summary__header}>
          <span>You have submited {this.count} numbers,</span>
          <span> {this.correctCount} was correct,</span>
          <span> {this.incorrectCount} was incorrect</span>
          <span> and {this.emptyCount} was empty</span>
          <span>This means that You have submited </span>
          <span> {this.correctPercentages}% of correct answers,</span>
          <span> {this.incorrectPercentages}% of incorrect answers,</span>
          <span> and {this.emptyPercentages}% of empty answers</span>
        </div>
        <ul className={classes.summary__list}>
          {this.items}
        </ul>
      </div>
  }
}

export default Summary;