import React from "react";
import '../App.css';

function SearchForm(props) {
  return (
    <div className="form">
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
    <button type="button" className="btn btn-primary" id="button">Search</button>
    <input type="reset" className="btn btn-primary" id="reset-btn" value="Reset"></input>
    </div>
    </form>
  
  </div>
  );
}

export default SearchForm;
