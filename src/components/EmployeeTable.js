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
           <th scope="col">Nationality</th>
         </tr>
       </thead>
            <tbody className="table-font">
            {props.users? props.users.map((user, i) => 
                <tr key={i}>
                 <td><img id="employee-photo" src={user.picture.medium}/></td>   
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.nat}</td>
                </tr>
                ): <p>No repo available!</p>}
            </tbody>
            </table>  
        
    )
}

export default EmployeeTable;