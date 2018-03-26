import React from 'react'
import { AxisBottom, AxisLeft } from '@vx/axis';
import {Line} from "react-chartjs";
import './graph.css';

const chartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}
	]
};

const chartOptions = {

	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - Whether the line is curved between points
	bezierCurve : true,

	//Number - Tension of the bezier curve between points
	bezierCurveTension : 0.4,

	//Boolean - Whether to show a dot for each point
	pointDot : true,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

  // {% raw %}
	// //String - A legend template
	// legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
	// {% endraw %}

	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false
};


class Graphic extends React.Component  {

	state = {
		width: 800,
	    height:300
	}

	updateDimensions = () => {
		console.log("Width is:"+this.state.width);
		console.log("Height is:"+this.state.height);
		let width = this.refs.chart.offsetWidth;
		let height= this.refs.chart.offsetHeight;
		console.log("test Height is:"+height);
		console.log("test Width is:"+width);
		this.setState({width:width, height:height-30});
	}	

	componentDidMount = () => {
		 window.addEventListener("resize", this.updateDimensions());
	}

   	render(){
		   
	const canStyle = {
		width: '90%',
		height: this.state.height-10,
	}

    return (
		<div ref="chart">
      		<Line data={chartData} style={canStyle} width="700" height="200" options={chartOptions} redraw/>
	  	</div>
    );
  }
}

export default Graphic;