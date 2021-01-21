import React from "react";
import '../App.css';

function SearchForm(props) {
  return (
    // <div>
    // <form>
    //   <div className="form-group">
    //     <input
    //       onChange={props.handleInputChange}
    //       value={props.value}
    //       name="search"
    //       type="text"
    //       className="form-control"
    //       placeholder="Search For an Employee"
    //       id="search"
    //     />
    //     <button onClick={props.handleFormSubmit} className="btn btn-primary">
    //       Search
    //     </button>
    //   </div>
    // </form>
    // </div>
    <div>
      <form>
    <div className="input-group">
    <input
    onChange={props.handleInputChange}
    value={props.value} 
    type="search" 
    className="form-control rounded" 
    placeholder="Search for an Employee" 
    aria-label="Search"
    name="search"
    aria-describedby="search-addon" />
    <button type="button" class="btn btn-primary">Search</button>
    </div>
    </form>
  
  </div>
  );
}

export default SearchForm;
