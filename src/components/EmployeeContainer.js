import React, { Component } from 'react';
import '../App.js';
import '../App.css';
import API from '../utils/API'
import LandingPage from './LandingPage';
import SearchForm from './SearchForm';
import EmployeeTable from './EmployeeTable';


class App extends Component {

  state = {
    allUsers: [],
    filteredResults: [],
    searchTerm: ""
  }

// filter results
  componentDidMount() {
    API.getData()
    .then(users => {
      this.setState({
        allUsers: users.data.results,
        filteredResults: users.data.results
      })
    })
  }

  handleChange = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0 || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.location.nat.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  handleFormSubmit = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  render() {
    return (
      <>
      <LandingPage />
      <SearchForm 
      handleChange={this.handleChange}
      searchTerm={this.state.searchTerm}
      handleFormSubmit={this.handleFormSubmit}
      />
      <EmployeeTable users={this.state.filteredResults}/>
      </>
    );
  }

}

export default App;





