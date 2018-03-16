import React from 'react'
import Maps from '../../maps'
import axios from 'axios'

const markers=[
    {latitude: -23.5612844, longitude: -46.6955538},
    {latitude: -23.5612844, longitude: -46.6944638},
    {latitude: -23.5612844, longitude: -46.6933738},
    { latitude: -23.5612844, longitude: -46.6965538 },
  ]

const history = [
    {
        idAlerta: 1,
        idCliente: 1,
        nomeAlerta: "Alerta - Vibracao",
        nomeCliente: "Bruno Rico",
        dataAlerta: "2018-03-13T19:02:50.9191286",
        longitude: 40.12345,
        latitude: -74.00239,
    },
    {
        idAlerta: 1,
        idCliente: 1,
        nomeAlerta: "Alerta - Vibracao",
        dataAlerta: "2018-03-14T19:02:50.9191286",
        nomeCliente: "Bruno Rico",
        longitude: 40.12345,
        latitude: -74.00239,
    }
 ]

const history2 = [
    {
        id: 1,
        nome: "Alerta-Vibracao",
        data: "2018-03-13T19:02:50.9191286",
        cliente: {
            id: 1,
            nome: "Bruno Rico"
        },
        localizacao: {
            longitude: 40.12345,
            latitude: -74.00239
        }
    }
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
            <Maps markers={history}/>
        )
    }
}

export default Home;