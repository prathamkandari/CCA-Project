import React from 'react';
import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: '100%', height: '100%' }}
                zoom={10}
                initialCenter = {
                    {
                        lat: 30.066753,
                        lng: 79.019302
                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAMn_y4o58Lq7cHa9n96dHK591DnG8MA4Y"
})(MapContainer)