import React, { Component } from 'react';
import './ParkCard.css';

class ParkCard extends Component {
  render() {
    return (
      <card className="park-card">
        <name>{this.props.name}</name>
        <description>{this.props.description}</description>
        <a href={this.props.url} className="more-information">More information</a>
      </card>
    );
  }
}

/* Example usage:
<ParkCard
  name = "Example park name"
  description = "Example park description"
  designation = "Example park designation"
  url = "Example park url"
  directionsUrl = "Example park directionsUrl"
  weatherInfo = "Example park weatherInfo"
  images = "Example park images"
  coordinates = "Example park coordinates"
/>
*/

export default ParkCard;
