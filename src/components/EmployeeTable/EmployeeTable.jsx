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
     
    <td scope="row">{data.picture.medium}</td>
      {/* <td>{data.results[0].name.first}</td>
      <td>{data.results[0].name.last}</td>
      <td>{data.results[0].phone}</td>
      <td>{data.results[0].email}</td>
      <td>{data.results[0].nat}</td> */}
    </tr>
    
      
    
  </tbody>
</table> 
)
}
