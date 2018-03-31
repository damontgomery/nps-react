import React, { Component } from 'react';
import './StateFilter.css';

const states = new Map([
  ['AL', 'Alabama'],
  ['AK', 'Alaska'],
  ['AZ', 'Arizona'],
  ['AR', 'Arkansas'],
  ['CA', 'California'],
  ['CO', 'Colorado'],
  ['CT', 'Connecticut'],
  ['DE', 'Delaware'],
  ['FL', 'Florida'],
  ['GA', 'Georgia'],
  ['HI', 'Hawaii'],
  ['ID', 'Idaho'],
  ['IL', 'Illinois'],
  ['IN', 'Indiana'],
  ['IA', 'Iowa'],
  ['KS', 'Kansas'],
  ['KY', 'Kentucky'],
  ['LA', 'Louisiana'],
  ['ME', 'Maine'],
  ['MD', 'Maryland'],
  ['MA', 'Massachusetts'],
  ['MI', 'Michigan'],
  ['MN', 'Minnesota'],
  ['MS', 'Mississippi'],
  ['MO', 'Missouri'],
  ['MT', 'Montana'],
  ['NE', 'Nebraska'],
  ['NV', 'Nevada'],
  ['NH', 'New Hampshire'],
  ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'],
  ['NY', 'New York'],
  ['NC', 'North Carolina'],
  ['ND', 'North Dakota'],
  ['OH', 'Ohio'],
  ['OK', 'Oklahoma'],
  ['OR', 'Oregon'],
  ['PA', 'Pennsylvania'],
  ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'],
  ['SD', 'South Dakota'],
  ['TN', 'Tennessee'],
  ['TX', 'Texas'],
  ['UT', 'Utah'],
  ['VT', 'Vermont'],
  ['VA', 'Virginia'],
  ['WA', 'Washington'],
  ['WV', 'West Virginia'],
  ['WI', 'Wisconsin'],
  ['WY', 'Wyoming'],
  ['AS', 'American Samoa'],
  ['DC', 'District of Columbia'],
  ['FM', 'Federated States of Micronesia'],
  ['GU', 'Guam'],
  ['MH', 'Marshall Islands'],
  ['MP', 'Northern Mariana Islands'],
  ['PW', 'Palau'],
  ['PR', 'Puerto Rico'],
  ['VI', 'Virgin Islands'],
  ['AE', 'Armed Forces Africa'],
  ['AA', 'Armed Forces Americas'],
  ['AP', 'Armed Forces Pacific']
]);

class StateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: props.state
    };
  }

  render() {
    let options = Array.from(states, ([stateCode, stateName]) => {return (<option key={stateCode} value={stateCode}>{stateName}</option>);});

    return (
      <select
        name="state-filter"
        defaultValue={this.state.state}
        onChange={(event) => {
          let selectedState = event.target.value;
          this.setState({state: selectedState});
          return this.props.onChange(selectedState);
        }}
      >
        {options}
      </select>
    );
  }
}

/* Example usage:
<StateFilter
  state = "PA"
/>
*/

export default StateFilter;
