import React from 'react'
import $ from 'jquery'

class AFilm extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     color: 'black'
  //   }
  // }

  toggleFunc() {
    this.props.toggleSeen(this.props.movieName)
    // if(this.state.color === 'black'){
    //   this.setState({color: 'cyan'})
    // } else {
    //   this.setState({color: 'black'})
    // }
    $(this).toggleClass("selected")
  }

  render(){
    return (
      <div className="aFilmContainer">
          <div style={{color: 'black'}} className="aFilm" onClick={()=>{this.toggleFunc()}}>
            {this.props.movie.title}
          </div>
          <button type="button" onClick={()=>{this.props.removeMovie(this.props.movie.title)}} className="removeButton btn btn-danger">Remove</button>
      </div>
    )
  }
}

export default AFilm