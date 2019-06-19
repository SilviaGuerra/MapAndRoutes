import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

//import style from './style';

export class MapContainer extends Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={14} 
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Queridaaaaa</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS_API_KEY)
})(MapContainer)