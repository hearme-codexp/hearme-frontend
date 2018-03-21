import React from 'react'
import Maps from '../../maps'
import Maps2 from '../../maps2'
import axios from 'axios'
import Graphic from '../../graphic'
import Loading from '../../loading'
import './home.css'

// const history = [
//     {
//         idAlerta: 1,
//         idCliente: 1,
//         nomeAlerta: "Alerta - Vibracao",
//         nomeCliente: "Bruno Rico",
//         dataAlerta: "2018-03-13T19:02:50.9191286",
//         longitude: 40.12345,
//         latitude: -74.00239,
//     },
//     {
//         idAlerta: 1,
//         idCliente: 1,
//         nomeAlerta: "Alerta - Vibracao",
//         dataAlerta: "2018-03-14T19:02:50.9191286",
//         nomeCliente: "Bruno Rico",
//         longitude: 40.12345,
//         latitude: -74.00239,
//     }
//  ]

// const history2 = [
//     {
//         id: 1,
//         nome: "Alerta-Vibracao",
//         data: "2018-03-13T19:02:50.9191286",
//         longitude: 40.12345,
//         latitude: -74.00239
//     }
// ]

// const margin = {
//     right: 0,
//     left: 0,
//     top: 0,
//     bottom: 0 
// }

// const yScale = Scale.scaleLinear({
//     rangeRound: [graphHeight, 0],
//     domain: [0, maxPopulation],
// });
   
// const bars = data.map((d, i) => {
//     const barHeight = graphHeight - yScale(d.y);
//     return <Shape.Bar height={barHeight} y={graphHeight - barHeight} />
// })

// const graphHeight = 500; // We'll have a 500 pixel high graph
// const maxPopulation = 1000;

axios.defaults.baseURL = 'https://hearme-app.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Home extends React.Component {

    state = {
        markers: [
            {latitude: -23.5612844, longitude: -46.6955538},
            {latitude: -23.5612844, longitude: -46.6944638},
            {latitude: -23.5612844, longitude: -46.6933738},
            {latitude: -23.5612844, longitude: -46.6965538},
        ],
        history: []
    }

    componentWillMount = () => {
        axios.get('api/Historico/cliente/1')
        .then(response => {
            console.log(response);
            this.setState(prevState => ({...prevState, history: response.data}));
        })
        .catch(error => {
            return [{latitude: -23.5612844, longitude: -46.6955538}];
            console.log('Error', error);
        });
    }
    
    render(){
        const mapa = (
            <React.Fragment>
                        <Graphic />
                        {/* <Maps2 /> */}
                        <Maps markers={this.state.history}/>
            </React.Fragment>
        );

        const loading = <div className='load'><Loading /></div>;
        
        if(this.state.history.length > 0)
            return mapa;
        else 
            return loading;
        
            // return loading;
    }
}

export default Home;