import React from 'react'
import Maps from '../../maps'
import axios from 'axios'
import Graphic from '../../graphic'
import Loading from '../../loading'
import './home.css'

axios.defaults.baseURL = 'https://hearme-app.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Home extends React.Component {

    state = {
        // markers: [
        //     {latitude: -23.5612844, longitude: -46.6955538},
        //     {latitude: -23.5612844, longitude: -46.6944638},
        //     {latitude: -23.5612844, longitude: -46.6933738},
        //     {latitude: -23.5612844, longitude: -46.6965538},
        // ]
        markers: [],
        graphicData:[]
    }

    componentWillMount() {
        this.setState({ markers: [] })
    }

    componentDidMount = () => {
        axios.get('api/Historico/cliente/1')
        .then(response => {
            // console.log(response);
            this.setState(prevState => ({ ...prevState, markers: response.data}));
        })
        .catch(error => {
            console.log('Error', error);
            return [{latitude: -23.5612844, longitude: -46.6955538}];
        });

        axios.get('api/Historico/cliente/Graph/1')
        .then(response => {
            // console.log(response);
            this.setState(prevState => ({ ...prevState, graphicData: response.data}));
        })
        .catch(error => {
            console.log('Error', error);
            return [];
        });
    }
    
    render(){
        const map = (
            <React.Fragment>
                        <div className="content">
                            <div className="content__map">
                                <Maps markers={this.state.markers}/>
                            </div>
                            <div className="content__graphic">
                                <Graphic data={this.state.graphicData}/> 
                            </div>
                        </div>
            </React.Fragment>
        );
        
        const loading = <div className='load'><Loading /></div>;
        
        if(this.state.markers.length > 0)
            return map;
        else 
            return loading;
    }
}

export default Home;