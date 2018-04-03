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
            console.log(response);
            this.setState(prevState => ({ ...prevState, graphicData: response.data}));
        })
        .catch(error => {
            console.log('Error', error);
            return [];
        });
    }
        
    render(){
        const loading = <div className='load'><Loading /></div>;
        const maps = <Maps markers={this.state.markers}/>;
        const graph= <Graphic graphicData={this.state.graphicData}/>;

        const complete = (
            <React.Fragment>
                        <div className="content">
                            <div className="content__map">
                                {this.state.markers.length > 0 ?  maps : loading}
                            </div>
                            <div className="content__graphic">
                                 {this.state.graphicData.length > 0 ?  graph : loading}
                            </div>
                        </div>
            </React.Fragment>
        );
        
        return complete;
    }
}

export default Home;