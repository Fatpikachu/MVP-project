import React from 'react'

const AddMovie = (props) => {
 return (<div>
  <input className='toAdd' type="text" placeholder="add a movie"/>
  <button type="button" className="btn btn-outline-primary" onClick={()=>{props.addAMovie();}}>add</button>
 </div>)
}

export default AddMovie