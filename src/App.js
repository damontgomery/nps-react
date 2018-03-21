import React, { Component } from 'react';
import './App.css';
import ParkCard from './Components/ParkCard';
import {NPSAPI} from './NPSAPI';

class App extends Component {
  render() {
    let parks = NPSAPI.getParks();
    let parkCards = parks.map((park) => {
      return (
        <ParkCard
          name = {park.name}
          description = {park.description}
          designation = {park.designation}
          url = {park.url}
          directionsUrl = {park.directionsUrl}
          weatherInfo = {park.weatherInfo}
          images = {park.images}
          coordinates = {park.coordinates}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">National Park Service API React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="content">{parkCards}</div>
      </div>
    );
  }
}

export default App;
