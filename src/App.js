// React
import React, { Component } from 'react';
import './App.css';

// Components
import ParkList from './Components/ParkList';

// GraphQL Client
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
          parkCode
          name
          description
          designation
          url
          directionsUrl
          weatherInfo
          images {
            url
          }
          coordinates {
            lat
            long
          }
        }
       }
    `;

    // Create a higher order component by combining GraphQL with the React component.
    const ParkListWithData = graphql(parksQuery)(({ data: {loading, error, parks }}) => {
       if (loading) {
         return <p>Loading ...</p>;
       }
       if (error) {
         return <p>{error.message}</p>;
       }
       return <ParkList parks={parks}/>;
     });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">National Park Service API React App</h1>
          </header>
          <ParkListWithData/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
