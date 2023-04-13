import React from 'react';
import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <><Map google={this.props.google}
                style={{ width: '100%%', height: '100%', left: '-8%' }}
                zoom={10} />
                <Marker onClick={this.onInfoWindowClick}
                    name={'Current Location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </> 
        );
    }
}

                export default GoogleApiWrapper({
                    apiKey: "AIzaSyAMn_y4o58Lq7cHa9n96dHK591DnG8MA4Y"
})(MapContainer)