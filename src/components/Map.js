import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";

import './Map.scss';
import "leaflet/dist/leaflet.css";

class Map extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            position: [45.188529, 5.724524]
        }
    }

    customMarker = new L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [13, 0]
    });

    mapSuppliers = this.props.suppliers.map(supplier => {
        return (
            <Marker key={supplier.id} position={[supplier.latitude, supplier.longitude ]} icon={this.customMarker}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        )
    });

    render(){
        return(
            <div className="map">
                <MapContainer center={this.state.position} zoom={4} scrollWheelZoom={false} style={{ height: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.mapSuppliers}
                </MapContainer>
            </div>
        )
    }
}

export default Map
