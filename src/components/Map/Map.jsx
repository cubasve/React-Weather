import React from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

/* PROBLEM:  mapDiv ref gets recreated everytime the Map component renders */
// mapDiv.current is still null and hasn't rendered to the page yet
// Error: Expected mapDiv of type Element but was passed null

// export default function Map(props) {
//     let mapDiv = React.createRef();
//     if (props.latitude && props.longitude) {
//         const location = {latitude: props.latitude, longitude: props.longitude};

//         //Creates the map
//         const map = new window.google.maps.Map(mapDiv.current, {
//             zoom: props.zoom || 12,
//             center: location,
//             disableDefaultUI: true,
//             styles: mapStyle,
//         });

//         //Draw a marker on the map (marker = current location)
//         new window.google.maps.Marker({position: location, map: map});
//     }
//     //Return a div that the map is going to be drawn onto
//     return <div ref={mapDiv} /*className={styles.Map}*/></div>
// }

export default class Map extends React.Component {
    //A new ref is created for every new instance
    mapDiv = React.createRef();

    setMap() {
        if (this.props.latitude && this.props.longitude) {
            const location = {latitude: this.props.latitude, longitude: this.props.longitude};
            const map = new window.google.maps.Map(
                this.mapDiv.current, {
                    zoom: this.props.zoom || 12,
                    center: location,
                    disableDefaultUI: true,
                    styles: mapStyle,
                }
            );
            new window.google.maps.Marker({position: location, map: map});
        }
    }

    //Wait until the Map component is mounted before we draw the map
    componentDidMount() {
        this.setMap();
    }

    //When we receive a new latitude and longitude, we need to redraw the map
    componentDidUpdate() {
        this.setMap();
    }

    render() {
        return (
            <div ref={this.mapDiv} className={styles.Map}></div>
        )
    }
}