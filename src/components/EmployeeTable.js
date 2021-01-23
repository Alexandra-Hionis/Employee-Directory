import React from 'react'
import '../App.css';

function EmployeeTable(props) {

    return (
        <table className="table">
           <thead className="table-font">
           <tr>
           <th scope="col">Photo</th>
           <th scope="col">First</th>
           <th scope="col">Last</th>
           <th scope="col">Phone</th>
           <th scope="col">Email</th>
           <th scope="col">Username</th>
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
                <td>{user.login.username}</td>
                </tr>
                ): <p>No Result!</p>}
            </tbody>
            </table>  
        
    )
}

export default EmployeeTable;