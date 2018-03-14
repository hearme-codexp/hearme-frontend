import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import style from './maps.css'
import demoFancyMapStyles from "./demoFancyMapStyles.json"
import {GoogleMap} from 'react-google-maps';

const style = {
    width: '50%',
    height: '50%',
    'margin-top': '20px',
    'margin-right': '0'
}

export class MapContainer extends React.Component {
state = {
    selectedPlace : "test"
}

render() {

    return (
      <Map google={this.props.google}
        style={style}
        styles= {demoFancyMapStyles}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBkztZV6Py0-LpJVYmSJ3gT_DmMWq0M6Iw")
})(MapContainer)