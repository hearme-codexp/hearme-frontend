import React from 'react';
import {Line} from 'react-chartjs-2';
import './graph.css';



// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: true,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(24,0,42,1)',
//       borderColor: '#00dff0',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(24,0,42,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(24,0,42,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

class Graph extends React.Component {

    state = {
      data: null  
    }
    
    componentDidMount = () =>  {
      let ctx = this.refs.chart.chartInstance.canvas.getContext('2d');
      let gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, 'blue');
      gradient.addColorStop(0.5, '#B6DFF0');
      gradient.addColorStop(1, '#FFF');

      this.setState( {
        data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        gridLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        datasets: [
          {
            label: 'My First dataset',
            // fill: true,
            // fillColor: gradient,
            lineTension: 0.1,
            backgroundColor: gradient,
            borderColor: '#261635',
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
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
     });
    }
    
    options = {
      scales: {
          xAxes: [{
                      gridLines: {
                          color: "rgba(255, 255, 255, 0.5)",
                      },
                      ticks: {
                        beginAtZero:true,
                        fontColor: 'white'
                    }
                  }],
          yAxes: [{
                      gridLines: {
                          color: "rgba(255, 255, 255, 0.5)",
                      },
                      ticks: {
                        beginAtZero:true,
                        fontColor: 'white'
                    }   
                  }]
          }
        }
    render() {
        console.log(this.state.data);
        return (
          <div className="item" >
            <h2>Presentation</h2>
            <Line ref="chart" data={this.state.data} options={this.options}/>
          </div>
        );
      }
}

export default Graph;