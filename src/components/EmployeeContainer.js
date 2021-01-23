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






















































// My other attemps. Ended up referencing a similar project

// export default function EmployeeContainer() {
//     return (
//         <div>
//             <LandingPage />
//             <SearchForm />
//         </div>
//     )
// }

// Referenced week 19 act 20 for comparable file
// class EmployeeContainer extends Component {
//     state = {
//       result: {},
//       search: ""
//     };
  
//     // When this component mounts, search for employees
//     componentDidMount() {
//       this.searchEmployees();
//     }
  
//     searchEmployees = query => {
//       API.search(query)
//         .then(res => this.setState({ result: res.data }))
//         .catch(err => console.log(err));
//     };
  
//     handleInputChange = event => {
//       const value = event.target.value;
//       const name = event.target.name;
//       this.setState({
//         [name]: value
//       });
//     };
  
//     // When the form is submitted, search the random user API for the value of `this.state.search`
//     handleFormSubmit = event => {
//       event.preventDefault();
//       this.searchEmployees(this.state.search);
//     };








  
//     render() {
//       return (
//         <div>
//           <Row>
//           <Col size="sm-12">
//               <LandingPage>

//               </LandingPage>
//             </Col>
//           </Row>
//           <Row>
//           <Col size="sm-12">
//                 <SearchForm
//                   value={this.state.search}
//                   handleInputChange={this.handleInputChange}
//                   handleFormSubmit={this.handleFormSubmit}
//                 />
//             </Col>
//           </Row>
//           <Row>
//               <Col size="sm-12">
//               {/* // Table Just temporary */}
//               <table className="table">
//   <thead className="thead-dark">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
//               </Col>
//           </Row>
//         </div>
//       );
//     }
//   }

// That way when we do
// employeeState[i]
// and try the loop won’t even start, because employeeState.length === 0