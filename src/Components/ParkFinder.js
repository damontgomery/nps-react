import React, { Component } from 'react';
import './ParkFinder.css';
import ParkList from './ParkList';
import StateFilter from './StateFilter';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ParkFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateFilter: "UT"
    };
  }

  handleStateFilterChange (state) {
    this.setState({
      stateFilter: state
    });
  }

  handleParkClick (park) {
    this.props.onParkClick(park);
  }

  render() {
    const parksQuery = gql`
      query parksQuery($stateFilter: State!){
        parks(stateCode: $stateFilter) {
          parkCode
          fullName
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
    const ParkListWithData = graphql(
      parksQuery,
      {
        options: {
          variables: {
            // parkCodeFilter: "arch",
            stateFilter: this.state.stateFilter
          }
        },
      }
    )(({ data: {loading, error, parks }}) => {
      if (loading) {
        return <p>Loading ...</p>;
      }
      if (error) {
        return <p>{error.message}</p>;
      }
      return (
        <ParkList
          parks={parks}
          onParkClick={(park) => this.handleParkClick(park)}
        />
      );
     });

    return (
      <div className="park-finder">
        <StateFilter
          state={this.state.stateFilter}
          onChange={(state) => this.handleStateFilterChange(state)}
          className="park-finder--state-filter"
        />
        <ParkListWithData
          className="park-finder--park-list"
        />
      </div>
    );
  }
}

/* Example usage:
<ParkFinder
/>
*/

export default ParkFinder;
