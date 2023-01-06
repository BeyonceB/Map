import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){

    const position = [49.28594, -123.11129];

    const kgeorge = [
        [49.28594, -123.11129],
        [49.28558, -123.12012],
        [49.28276, -123.11646],
        [49.28010, -123.11012],
        [49.27337, -123.10037],
        [49.26272, -123.06927],
        [49.24844, -123.05598],
        [49.24436, -123.04537],
        [49.23855, -123.03172],
        [49.22991, -123.01265],
        [49.22593, -123.00385],
        [49.22019, -122.98845],
        [49.21254, -122.95914],
        [49.20006, -122.94922],
        [49.20159, -122.91263],
        [49.20494, -122.90607],
        [49.20457, -122.87402],
        [49.19911, -122.85066],
        [49.18971, -122.84792],
        [49.18293, -122.84473],
    ];

    const pway = [
        [49.28594, -123.11129],
        [49.28558, -123.12012],
        [49.28276, -123.11646],
        [49.28010, -123.11012],
        [49.27337, -123.10037],
        [49.26272, -123.06927],
        [49.24844, -123.05598],
        [49.24436, -123.04537],
        [49.23855, -123.03172],
        [49.22991, -123.01265],
        [49.22593, -123.00385],
        [49.22019, -122.98845],
        [49.21254, -122.95914],
        [49.20006, -122.94922],
        [49.20159, -122.91263],
        [49.20494, -122.90607],
        [49.22486, -122.88949],
        [49.23268, -122.88456],
        [49.24875, -122.89717],
        [49.25367, -122.91868]
    ];

    const blueOption = {color: 'rgb(16, 16, 104)'};
    const pinkOption = {color: '#bc1367'};

    
    return(
        <MapContainer className={style.map} center={[49.22006, -122.94922]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* All */}
            <Marker position={position}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.28558, -123.12012]}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>
            <Marker position={[49.28276, -123.11646]}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>
            <Marker position={[49.28010, -123.11012]}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>
            <Marker position={[49.27337, -123.10037]}>
                <Popup>
                    Main Street Science World Station
                </Popup>
            </Marker>
            <Marker position={[49.26272, -123.06927]}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.24844, -123.05598]}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>
            <Marker position={[49.24436, -123.04537]}>
                <Popup>
                    29th Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.23855, -123.03172]}>
                <Popup>
                    Joyce-Collingwoo Station
                </Popup>
            </Marker>
            <Marker position={[49.22991, -123.01265]}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>
            <Marker position={[49.22593, -123.00385]}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>
            <Marker position={[49.22019, -122.98845]}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>
            <Marker position={[49.21254, -122.95914]}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>
            <Marker position={[49.20006, -122.94922]}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>
            <Marker position={[49.20159, -122.91263]}>
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>
            <Marker position={[49.20494, -122.90607]}>
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>

            {/* King George */}
            <Marker position={[49.20457, -122.87402]}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>
            <Marker position={[49.19911, -122.85066]}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>
            <Marker position={[49.18971, -122.84792]}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>
            <Marker position={[49.18293, -122.84473]}>
                <Popup>
                    King George Station
                </Popup>
            </Marker>

            {/* Production Way */}
            <Marker position={[49.22486, -122.88949]}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>
            <Marker position={[49.23268, -122.88456]}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>
            <Marker position={[49.24875, -122.89717]}>
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.25367, -122.91868]}>
                <Popup>
                    Production Way-University Station
                </Popup>
            </Marker>
            
            <CircleMarker center={[49.28594, -123.11129]} pathOptions={pinkOption} radius={20}>
                <Popup>You reached your destination!</Popup>
            </CircleMarker>
            <CircleMarker center={[49.18293, -122.84473]} pathOptions={pinkOption} radius={20}>
                <Popup>You reached your destination!</Popup>
            </CircleMarker>
            <CircleMarker center={[49.25367, -122.91868]} pathOptions={pinkOption} radius={20}>
                <Popup>You reached your destination!</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={kgeorge} />
            <Polyline pathOptions={blueOption} positions={pway} />
        </MapContainer>
    )

}