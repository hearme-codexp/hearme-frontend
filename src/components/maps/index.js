import React from 'react'
import './maps.css';
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCS8KIWpVjNHMryUXYXKY4nZZnfFoO8nlY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `70vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={ props.initialMarker }
    defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      defaultAverageCenter={true}
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.idHistoricoAlerta}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class MapContainer extends React.PureComponent {
//   componentWillMount() {
//     this.setState({ markers: [] })
//   }

//   componentDidMount() {
//     const url = [
//       // Length issue
//       `https://gist.githubusercontent.com`,
//       `/farrrr/dfda7dd7fccfec5474d3`,
//       `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
//     ].join("")

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ markers: data.photos });
//       });
//   }

    setInitialMarker = (markers) => {
        if(markers != null && markers.length > 0) {
            return  { lat: markers[0].latitude, lng: markers[0].longitude }
        }
    }

  render() {
      const { markers } = this.props;
    return (
      <div className="teste">
        <MapWithAMarkerClusterer markers={markers} initialMarker={this.setInitialMarker(markers)} />
      </div>
    )
  }
}

export default MapContainer