import React, { useState, useEffect } from "react";

// import React from 'react'
// import Container from "./Container.js"
import Row from "./Row.js";
import Col from "./Col.js";
import LandingPage from "./LandingPage";
import SearchForm from "./SearchForm.js";
import EmployeeTable from "./EmployeeTable/EmployeeTable.jsx"
// import API from "../utils/API"
require("es6-promise").polyfill();
require("isomorphic-fetch");



export default function EmployeeContainer() {



    const [data, setData] = useState([]);
    
    const [q, setQ] = useState("");
    
    useEffect (() => {
      
        fetch("https://randomuser.me/api/?results=100&inc=picture,name,email,phone,nat")
        .then((response) => (response.json()))
        .then(function(data){
        // When response comes back from the server this is handeled by a chained call to a function called then which takes a funciton and in our case it returns the response that comes back from the server, calling json on it to the httpresponse data into json data.
        // .then(response => response.json())
        // returns this promise our app has access to json data we can call set data and pass in the json variable that was returned from previous promise which now gice out EmpolyeeComtainer component access to that json datat which is stored in our local state
        // .then((json) => setData(json));
        // setData(data.results)
        console.log(data.results);
            // }, [])
          }, []);
  }, []);


return (
    <div>
           <Row>
          <Col size="sm-12">
              <LandingPage>

               </LandingPage>
             </Col>
          </Row>
          <Row>
          <Col size="sm-12">
                 <SearchForm>
                  {/* value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit} */}
                  </SearchForm>
            </Col>
          </Row>
          <Row>
              <Col size="sm-12">
                <EmployeeTable data={data}>
                  {/* table will take a single prop we call it data and were going to pass in the data variable that is store in our hook */}
                </EmployeeTable>
              </Col>
          </Row>
        </div>
      );
}

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