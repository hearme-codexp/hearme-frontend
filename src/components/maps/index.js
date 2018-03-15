import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './maps.css'
import demoFancyMapStyles from "./demoFancyMapStyles.json"
import GoogleMapReact from 'google-map-react';

const style = {
    width: '50%',
    height: '50%',
    // 'margin-top': '20px',
    // 'margin-right': '0'
    display: 'inline-block',
    position: 'unset',
    'box-sizing': 'border-box'
}

export class MapContainer extends React.Component {
state = {
    selectedPlace : "test"
}

render() {
    return (
      <Map
        containerStyle={{ display:'flex', width: '50%', position: 'unset', 'box-sizing': 'border-box'}}
        google={this.props.google}
        style={style}
        styles= {demoFancyMapStyles}
        defaultZoom={8}
        defaultCenter={{ lat: -23.5612844, lng: -46.6965538 }}>
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
  apiKey: ("AIzaSyBkztZV6Py0-LpJVYmSJ3gT_DmMWq0M6Iw"),
})(MapContainer)