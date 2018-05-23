import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Address from '../components/Address.js';
import Card from '../components/Card.js';
import Users from '../services/Users.js';
import '../assets/stylesheets/TaskPage.css';

export class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      state: '',
      city: '',
      area: '',
      items: [],
      userID: '',
      userDetails: {},
      hasError: false
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleGetDetails = this.handleGetDetails.bind(this);
    this.handleUserID = this.handleUserID.bind(this);
  }
 
  handleCountryChange(value) {
    this.setState({
      country: value.key
    });
  }

  handleStateChange(value) {
    this.setState({
      state: value.key
    });
  }

  handleCityChange(value) {
    this.setState({
      city: value.key
    });
  }

  handleAreaChange(value) {
    this.setState({
      area: !!this.state.area ? this.state.area + ', ' + value.key : '' + value.key
    });
  }

  handleAddClick() {
    var _items = this.state.items;
    var record = {
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      area: this.state.area
    };
    _items.splice(0, 0, record);
    this.setState({
      items: _items
    });
  }

  handleClearClick() {
    this.setState({ items: [] });
  }

  handleUserID(value) {
    this.setState({ userID: value });
  }

  async handleGetDetails() {
    var userDetails = await Users.getUserDetails(this.state.userID);
    this.setState({ userDetails });
  }

  render() {
    return (
      <div>
        <Address
          state={this.state}
          handleCountryChange={this.handleCountryChange}
          handleStateChange={this.handleStateChange}
          handleCityChange={this.handleCityChange}
          handleAreaChange={this.handleAreaChange}
          items={this.state.items}
          handleAddClick={this.handleAddClick}
          handleClearClick={this.handleClearClick} />
        <hr />
        <Card
          handleGetDetails={this.handleGetDetails}
          handleUserID={this.handleUserID}
          state={this.state} />
      </div>
    );
  }
}

TaskPage.propTypes = {
  dispatch: PropTypes.func,
};

export default TaskPage;
