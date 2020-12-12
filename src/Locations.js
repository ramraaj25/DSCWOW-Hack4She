import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: -1.2884,
            lng: 36.8233
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
            })
        }
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                center={
                    {
                        lat: this.state.lat,
                        lng: this.state.lng
                    }
                }
            >
                <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5Le71C303ldZaGkfeGiI-gZQ9V2HMuuY'
})(Locations);