import React, { Component } from 'react';
import './ParkList.css';

import ParkCard from './ParkCard';

class ParkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: props.parks,
      stateFilter: null
    };
  }

  render() {
    return this.state.parks.map((park) => {
      return (
        <ParkCard key={park.parkCode}
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
  }
}

/* Example usage:
<ParkList
  parks = graphqlParksData
  stateFilter = "PA"
/>
*/

export default ParkList;
