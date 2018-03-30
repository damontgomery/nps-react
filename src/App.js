// React
import React, { Component } from 'react';
import './App.css';

// Components
import ParkFinder from './Components/ParkFinder';
import ParkDetails from './Components/ParkDetails';
import BookmarkList from './Components/BookmarkList';

// GraphQL Client
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {

  constructor(props) {
    super(props);

    let parkDetailsMock = {
      name: null,
      description: null,
      designation: null,
      url: null,
      directionsUrl: null,
      weatherInfo: null,
      images: null,
      coordinates: null
    }

    this.state = {
      parkDetails: parkDetailsMock
    };
  }

  handleParkClick (park) {
    this.setState({
      parkDetails: {
        name: park.fullName,
        description: park.description,
        designation: park.designation,
        url: park.url,
        directionsUrl: park.directionsUrl,
        weatherInfo: park.weatherInfo,
        images: park.images,
        coordinates: park.coordinates
      }
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <header className="header">
            <h1 className="title">National Park Service API React App</h1>
          </header>
          <ParkDetails
            name = {this.state.parkDetails.name}
            description = {this.state.parkDetails.description}
            designation = {this.state.parkDetails.designation}
            url = {this.state.parkDetails.url}
            directionsUrl = {this.state.parkDetails.directionsUrl}
            weatherInfo = {this.state.parkDetails.weatherInfo}
            images = {this.state.parkDetails.images}
            coordinates = {this.state.parkDetails.coordinates}
          />
          <ParkFinder
            onParkClick={(park) => this.handleParkClick(park)}
          />
          <BookmarkList
            onParkClick={(park) => this.handleParkClick(park)}
          />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
