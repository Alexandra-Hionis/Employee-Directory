
import '../App.css';

export default function EmployeeTable({data}) {
  // create column variable using guard clause bc we use object.keys passing in the first row of data which is going to pull out all of the keys from the json
  const columns = data[0] && Object.keys(data[0]);
  return <table className="table">
  <thead className="thead-dark">
    {/* we start with a guide clause which will protect incase our data contains no rows. Bc were pulling keys out of first row to use as our headings. Do that by mapping over columns variable wich will contain keys from first row. An each iteration is going to return a single heading which we can wrap in a <th> to creat header for our table.  */}
    <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      
  </thead>
  <tbody>
    
  </tbody>
</table>
}
 
