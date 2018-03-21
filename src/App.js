import React, { Component } from 'react';
import './App.css';
import ParkCard from './Components/ParkCard';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    const parksQuery = gql`
      query {
        parks(stateCode: PA) {
          parkCode,
          name,
          description,
          designation,
          url,
          directionsUrl,
          weatherInfo,
          images {
            url
          }
          coordinates {
            lat,
            long
          }
        }
       }
    `;

    const ParkCards = graphql(parksQuery)(({ data: {loading, error, parks }}) => {
       if (loading) {
         return <p>Loading ...</p>;
       }
       if (error) {
         return <p>{error.message}</p>;
       }
       return parks.map((park) => {
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
     });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">National Park Service API React App</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ParkCards/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
