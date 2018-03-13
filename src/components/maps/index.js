import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '50%'
  }

export class MapContainer extends React.Component {
state = {
    selectedPlace : "test"
}

render() {
    return (
      <Map google={this.props.google} 
        style={style}
        zoom={14}>

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