import React, { Component } from 'react';
import './ParkCard.css';

class ParkCard extends Component {
  render() {
    return (
      <div className="park-card">
        <div className="name">{this.props.fullName}</div>
        <div className="description">{this.props.description}</div>
        <a href={this.props.url} className="more-information">More information</a>
        <a href={this.props.directionsUrl} className="directions">Directions</a>
      </div>
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
