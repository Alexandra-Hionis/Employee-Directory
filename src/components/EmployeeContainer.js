import React, { Component } from "react";
// import React from 'react'
import Container from "./Container.js"
import Row from "./Row.js"
import Col from "./Col.js"
import LandingPage from "./LandingPage"
import SearchForm from "./SearchForm.js"
import API from "../utils/API"

// export default function EmployeeContainer() {
//     return (
//         <div>
//             <LandingPage />
//             <SearchForm />
//         </div>
//     )
// }

// Referenced week 19 act 20 for comparable file
class EmployeeContainer extends Component {
    state = {
      result: {},
      search: ""
    };
  
    // When this component mounts, search for employees
    componentDidMount() {
      this.searchEmployees("employees");
    }
  
    searchEmployees = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, search the random user API for the value of `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.searchEmployees(this.state.search);
    };
  
    render() {
      return (
        <Container>
          <Row>
          <Col size="sm-12">
              <LandingPage>

              </LandingPage>
            </Col>
          </Row>
          <Row>
          <Col size="sm-12">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
            </Col>
          </Row>
        </Container>
      );
    }
  }

// Table


<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

export default EmployeeContainer;