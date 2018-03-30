import React, { Component } from 'react';
import './ParkDetails.css';

class ParkDetails extends Component {

  render() {
    if (this.props.name === null) {
      return (
        <div className="park-details">
          <p>Click on a park to see detailed information.</p>
        </div>
      );
    }
    // The title, for example of Hawaii parks, contain HTML encoded characters
    // which do not display without setting the inner HTML.
    // It would probably be safer to build a function to replace select HTML
    // encoded characters with unicode.
    return (
      <div className="park-details">
        <div className="name" dangerouslySetInnerHTML={{__html: this.props.name}}></div>
        <div className="description">{this.props.description}</div>
        <a href={this.props.url} className="more-information">More information</a>
        <a href={this.props.directionsUrl} className="directions">Directions</a>
        <button
          className="bookmark"
          onClick={(event) => this.props.onBookmark()}
        >Bookmark</button>
      </div>
    );
  }
}

/* Example usage:
<ParkDetails
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

export default ParkDetails;
