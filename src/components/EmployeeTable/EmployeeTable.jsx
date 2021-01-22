import React from "react"


export default function EmployeeTable({data}) {
  console.log(data);

  // return (null);

return (
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Nationality</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <th scope="row">{data.picture}</th>
      <td>{data.name}</td>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.nat}</td>
    </tr>
    
      
    
  </tbody>
</table> 
)
}
