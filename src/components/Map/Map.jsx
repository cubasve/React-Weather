import React from 'react';
import styles from './Map/module.css';
import mapStyle from './map-style';

export default function Map(props) {
    let mapDiv = React.createRef();
    if (props.latitude && props.longitude) {
        const location = {latitude: props.latitude, longitude: props.longitude};

        //Creates the map
        const map = new window.google.maps.Map(mapDiv.current, {
            zoom: props.zoom || 12,
            center: location,
            disableDefaultUI: true,
            styles: mapStyle,
        });

        //Draw a marker on the map (marker = current location)
        new window.google.maps.Marker({position: location, map: map});
    }
    //Return a div that the map is going to be drawn onto
    return <div ref={mapDiv} className={styles.Map}></div>
}