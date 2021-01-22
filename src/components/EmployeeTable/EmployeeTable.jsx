import React from "react"


export default function EmployeeTable({data}) {
  // create column variable using guard clause bc we use object.keys passing in the first row of data which is going to pull out all of the keys from the json
  const columns = data[0] && Object.keys(data[0]);
  return <table className="table">
  <thead className="thead-dark">
    {/* we start with a guide clause which will protect incase our data contains no rows. Bc were pulling keys out of first row to use as our headings. Do that by mapping over columns variable wich will contain keys from first row. An each iteration is going to return a single heading which we can wrap in a <th> to creat header for our table.  */}
    <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      
  </thead>
  <tbody>
    {/* We iterate through our data to grab each row out of that data variable and to display a table row tag for each of the rows in our json data. Then iterate over each columns to have table definition tag to show us each of those values for a cell in a row. Call row and pass in column to get at that individul cell*/}
    {data.map((row) => (
      <tr>
        {columns.map((column) => (
        <td>{row[column]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
}
 
