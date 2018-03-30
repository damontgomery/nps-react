// React
import React, { Component } from 'react';
import './App.css';

// Components
import ParkFinder from './Components/ParkFinder';
import ParkDetails from './Components/ParkDetails';
import ParkList from './Components/ParkList';

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

    let parkMock = {
      parkCode: null,
      fullName: null,
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
      parkDetails: parkMock,
      bookmarks: new Map
    };
  }

  handleParkClick (park) {
    this.setState({
      parkDetails: park
    });
  }

  // Bookmark the park shown in the detail section.
  handleBookmark () {
    let newBookmarks = this.state.bookmarks;

    // Add the current detailed park as a bookmarked park.
    newBookmarks.set(this.state.parkDetails.parkCode, this.state.parkDetails);

    this.setState({
      bookmarks: newBookmarks
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
            onBookmark = {() => this.handleBookmark()}
          />
          <ParkFinder
            onParkClick={(park) => this.handleParkClick(park)}
          />
          <div className="bookmark-list">
            <div className="title">Bookmarks</div>
            <ParkList
              parks={Array.from(this.state.bookmarks.values())}
              onParkClick={(park) => this.handleParkClick(park)}
            />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
