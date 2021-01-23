import React from 'react'
import '../App.css';

//  Help from classmate Alison https://github.com/theoriginalison/employee-directory/blob/main/src/components/EmployeeContainer.js
function EmployeeTable(props) {
    sortName = () => {
        let sortedNames = this.state.filteredResult.sort((a, b) => {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          return 0;
        },
        );
        this.setState({ filteredResult: sortedNames })
      }

    return (
        <table className="table">
           <thead className="table-font">
           <tr>
           <th scope="col">Photo</th>
           <th><button onClick={this.sortByName}>Name</button></th>
           {/* <th scope="col">First</th>
           <th scope="col">Last</th> */}
           <th scope="col">Phone</th>
           <th scope="col">Email</th>
           <th scope="col">Nationality</th>
         </tr>
       </thead>
            <tbody className="table-font">
            {props.users? props.users.map((user, i) => 
                <tr key={i}>
                 <td><img id="employee-photo" alt={user.name.first} src={user.picture.medium}/></td>   
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.nat}</td>
                </tr>
                ): <p>No Result!</p>}
            </tbody>
            </table>  
        
    )
}

export default EmployeeTable;