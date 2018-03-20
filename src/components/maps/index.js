import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './maps.css'
import demoFancyMapStyles from "./demoFancyMapStyles.json"
import GoogleMapReact from 'google-map-react';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

const style = {
    width: '100%',
    height: '100%',
    // 'margin-top': '20px',
    // 'margin-right': '0'
    // display: 'inline-block', 
    position: 'unset',
    'box-sizing': 'border-box'
}

export class MapContainer extends React.Component {
state = {
    selectedPlace : "test",

    // markers:[
    //           {latitude: -23.5612844, longitude: -46.6955538},
    //           {latitude: -23.5612844, longitude: -46.6944638},
    //           {latitude: -23.5612844, longitude: -46.6933738},
    //           { latitude: -23.5612844, longitude: -46.6965538 },
    //         ]
}

onMarkerClustererClick = (markerClusterer)  => {
  const clickedMarkers = markerClusterer.getMarkers()
  console.log(`Current clicked markers length: ${clickedMarkers.length}`)
  console.log(clickedMarkers)
}

setInitialMarker = (markers) => {
    console.log(markers)
    if(markers != null && markers.length > 0) {
      return  { lat: markers[1].latitude, lng: markers[1].longitude }
    }
    // else 
    //   return {lat: -23.5612844, lng: -46.6955538 }
}

render() {
    return (
      <Map
        containerStyle={{ width: '50%', height: '100%', 'box-sizing': 'border-box'}}
        google={this.props.google}
        style={style}
        styles= {demoFancyMapStyles}
        // fitBounds = {place.geometry.viewport}
        defaultZoom={false}
        initialCenter = {this.setInitialMarker(this.props.markers)}
      >
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

        {/* <MarkerClusterer
          onClick={this.props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
        > */}
          {this.props.markers.map((marker, i) => (
            <Marker
              key={i}
              onClick={this.onMarkerClick}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              name={'Current location'}
            />
          ))}
        {/* </MarkerClusterer> */}
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