import React from 'react'
import Maps from '../../maps'
import axios from 'axios'
import Graphic from '../../graphic'
import Loading from '../../loading'
import './home.css'
import { openNotification } from '../../../functions'

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
            openNotification({message: `MAPS: You can what happened with you!`, description: `Join on map to verify alerts details.`});
        })
        .catch(error => {
            console.log('Error', error);
            openNotification({message: `ERROR: Map data not found`, description: `Please, check your internet access and retry again later.`});
        });

        axios.get('api/Historico/cliente/Graph/1')
        .then(response => {
            console.log(response);
            this.setState(prevState => ({ ...prevState, graphicData: response.data}));
            openNotification({message: `Graph: You can what happened with you!`, description: `24h hours of alerts on graph.`});
        })
        .catch(error => {
            console.log('Error', error);
            openNotification({message: `ERROR: Graph data not found`, description: `Please, check your internet access and retry again later.`});
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