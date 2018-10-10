import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import styled from 'styled-components';
import Img from 'gatsby-image';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapActive: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  handleMapClick() {
    this.setState({ mapActive: true });
  }

  render() {
    const style = {};
    const mapActive = this.state.mapActive;
    let map;

    if (!mapActive) {
      map = (
        <div onClick={this.handleMapClick} style={{ cursor: 'pointer' }}>
          <Img fluid={this.props.placeholder} alt="Google Map" />
        </div>
      );
    } else {
      map = (
        <Map
          item
          xs={12}
          style={style}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{ lat: this.props.lat, lng: this.props.long }}
          google={window.google}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={this.props.title}
            position={{ lat: this.props.lat, lng: this.props.long }}
            name={this.props.title}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.props.title}</h3>
              <p>
                {this.props.street}
                <br />
                {this.props.city}
              </p>
            </div>
          </InfoWindow>
        </Map>
      );
    }

    return <div>{map}</div>;
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: 'AIzaSyDP8RMKWbg9zzzrXS4U6j0dOOVnIH0BLD8'
}))(GoogleMapsContainer);
