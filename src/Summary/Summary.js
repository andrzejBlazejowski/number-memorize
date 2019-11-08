import React from 'react'
import './Summary.css';

class Summary extends React.Component {

  getSummaryItems = (items) => items.map((item)=><li key={item.number} 
        className={item.number===item.MemorizedNumber?
        'summary_item summary_item--correct'
        :'summary_item summary_item--inCorrect'}>
        <span>{item.number}</span>
        <span>{item.MemorizedNumber}</span>
      </li>);

  render() {
    const items = this.getSummaryItems(this.props.summary);

    return <ul className="summary">
      {items}
    </ul>
  }
}

export default Summary;