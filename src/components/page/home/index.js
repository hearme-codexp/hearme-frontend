import React from 'react'
import Maps from '../../maps'
import axios from 'axios'

const markers=[
    {latitude: -23.5612844, longitude: -46.6955538},
    {latitude: -23.5612844, longitude: -46.6944638},
    {latitude: -23.5612844, longitude: -46.6933738},
    { latitude: -23.5612844, longitude: -46.6965538 },
  ]

class Home extends React.Component {

    onLoad = () => {
        axios.get('')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return (
            <Maps markers={markers}/>
        )
    }
}

export default Home;