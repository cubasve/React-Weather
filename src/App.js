import React, { Component } from 'react';
import './App.css';
import Map from '../src/components/Map/Map';
import { getCurrentLatitudeLongitude } from '../src/services/geolocation';

export default class App extends Component {
  state = {
    longitude: null,
    latitude: null,
  }

  async componentDidMount() {
    try {
      const position = await getCurrentLatitudeLongitude();
      console.log(position); //{latitude: 43.714364599999996, longitude: -79.45335299999999}

      //Destructure the object returned from getCurrentLatitudeLongitude()
      const {latitude, longitude} = await getCurrentLatitudeLongitude();
      console.log(latitude, longitude); //43.7143617 -79.4533635
      this.setState({ latitude, longitude });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <Map longitude={this.state.longitude} latitude={this.state.latitude} />
        <header className="App-header">REACT WEATHER</header>
      </div>
    )
  }
}
