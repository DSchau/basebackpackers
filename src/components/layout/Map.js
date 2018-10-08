import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleApiWrapper from '../layout/GoogleMapsContainer.js';
import Giffy from '../images/giphy.gif';
import styled from 'styled-components';

const Mapbox = styled.div`
  position: relative;
  height: 16rem;
`;

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.state = { mapActive: false };
  }

  handleMapClick() {
    this.setState({ mapActive: true });
  }

  render() {
    const mapActive = this.state.mapActive;
    let map;

    if (mapActive) {
      map = (
        <img
          src={Giffy}
          alt="Yes is the answer"
          onClick={this.handleMapClick}
        />
      );
    } else {
      map = (
        <Mapbox>
          <GoogleApiWrapper
            title={this.props.title}
            street={this.props.streetAddress}
            city={this.props.city}
            lat={this.props.latitude}
            long={this.props.longitude}
          />
        </Mapbox>
      );
    }

    return <div>{map}</div>;
  }
}

Map.propTypes = {};

export { Map };
