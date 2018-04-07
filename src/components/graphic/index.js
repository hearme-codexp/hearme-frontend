import React from 'react';
import {Line} from 'react-chartjs-2';
import './graph.css';
import Loading from '../loading'



class Graph extends React.Component {

  state = {
    data: {}
  }
  
  options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "#857f8a"
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#857f8a'
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "#857f8a"
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#857f8a'
          }
        }
      ]
    }
  }

  componentDidMount = () => {
    const { graphicData } = this.props 

    let ctx = this
    .refs
    .chart
    .chartInstance
    .canvas
    .getContext('2d');

  let gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, '#007af3');
    gradient.addColorStop(0.5, '#B6DFF0');
    gradient.addColorStop(1, '#FFF');

    var newData = graphicData.reduce((accum, v) => {
      let hora = new Date(v.hora).getHours();
      accum[hora] += v.count;
      return accum;
    }, new Array(24).fill(0));

    let labels = [];
    for (let i = 0; i < newData.length; i++) {
      labels.push(`${i}h`)
    }  

    this.setState({
      data: {
      labels: labels,
      gridLines: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      datasets: [
        {
          label: 'My First dataset',
          lineTension: 0.1,
          backgroundColor: gradient,
          borderColor: '#007af3',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(24,0,42,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(24,0,42,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: newData
        }
      ]
    }});
  }

  render() {
    return (<div className="graphic" >
              <h2 className="title">Presentation</h2>
              <Line ref="chart" data={this.state.data} options={this.options}/>
            </div>
    );
  }
}

export default Graph;