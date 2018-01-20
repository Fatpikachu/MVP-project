import React from 'react'

const SearchBar = (props) => {
 return (<div>
  <input className="toSearch" type="search" placeholder="Search" aria-label="Search"></input>
  <button onClick={props.doSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
 </div>)
}

export default SearchBar