import React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import classes from './Summary.module.scss';

am4core.useTheme(am4themes_animated);

class Summary extends React.Component {
  constructor( props ){
    super(props);
    this.updateComponentValues(props);
  }

  componentDidMount(){
    if(this.props.summary.length === 0){
      return;
    }
    let chart = am4core.create("summaryChart", am4charts.PieChart);
    let chartData = [
      { type: "valid",
        subType: "valid",
        subCount: this.correctCount,
        count: this.correctCount,
        color: am4core.color( "#C6E8A2" ) },
      { type: "in valid",
        subType: "in valid",
        subCount: this.incorrectCount + this.emptyCount,
        count: this.incorrectCount,
        color: am4core.color( "#FFF3B3" ) },
      { type: "empty",
        count: this.emptyCount,
        color: am4core.color( "#C7C26B" ) },
    ];
    
    chart.data = chartData;

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.calculatePercent = true;
    pieSeries.slices.template.tooltipText = "{category}: {value.value}"
    pieSeries.labels.template.disabled = true;
    
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.stroke = am4core.color("#F7FFC0");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;

    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "type";
    
    let pieSubSeries = chart.series.push(new am4charts.PieSeries());
    pieSubSeries.calculatePercent = true;
    pieSubSeries.labels.template.disabled = true;
    pieSubSeries.slices.template.tooltipText = "{category}: {value.value}"
    
    pieSubSeries.slices.template.propertyFields.fill = "color";
    pieSubSeries.slices.template.stroke = am4core.color("#F7FFC0");
    pieSubSeries.slices.template.strokeWidth = 1;
    pieSubSeries.slices.template.strokeOpacity = 1;
    pieSubSeries.hiddenState.properties.endAngle = 270;
    pieSubSeries.hiddenState.properties.startAngle = 270;

    pieSubSeries.dataFields.value = "subCount";
    pieSubSeries.dataFields.category = "subType";

    chart.innerRadius = am4core.percent(10);
    
    this.chart = chart;
  }

  componentDidUpdate(){
    this.updateComponentValues(this.props);    
  }

  updateComponentValues = (props) => {
    this.history = [...props.summary]; // create copy of props

    this.items = this.getSummaryItems(this.history);

    this.count = this.history.length;

    this.correctCount = this.history.reduce( (previousValue, currentValue) =>  
      previousValue + (currentValue.number === currentValue.memorizedNumber?1:0),0);
    this.correctPercentages = Math.floor(this.correctCount*100/this.count);
    this.correctPercentages = this.correctPercentages? this.correctPercentages:0;

    this.incorrectCount = this.history.reduce( (previousValue, currentValue) =>  
      previousValue + (currentValue.number !== currentValue.memorizedNumber && currentValue.memorizedNumber?1:0),0);
    this.incorrectPercentages = Math.floor(this.incorrectCount*100/this.count);
    this.incorrectPercentages = this.incorrectPercentages? this.incorrectPercentages:0;

    this.emptyCount =  this.history.reduce( (previousValue, currentValue) =>  
     previousValue + (!currentValue.memorizedNumber?1:0),0);
    this.emptyPercentages = Math.floor(this.emptyCount*100/this.count);
    this.emptyPercentages = this.emptyPercentages? this.emptyPercentages:0;
  }

  getSummaryItems = (items) => items.reverse().map((item)=><li key={item.number} 
        className={item.number===item.memorizedNumber?
          classes.summary__item + ' '+ classes['summary__item--correct']
        : classes.summary__item + ' '+ classes['summary__item--inCorrect']}>
        <span>{item.number}</span>
        <span>{item.memorizedNumber?item.memorizedNumber:classes.empty}</span>
      </li>);

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div className={classes.summary}>
        <div id="summaryChart"></div>
        <ul className={classes.summary__list}>
          {this.items}
        </ul>
      </div>
  }
}

export default Summary;