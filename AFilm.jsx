import React from 'react'
import $ from 'jquery'

class AFilm extends React.Component {
  constructor(props){
    super(props);
  }

  toggleFunc(index) {
    console.log('entered in togglefnc')
    console.log('the index ', index)
    this.props.toggleSeen(this.props.movieName)
    // if(this.state.color === 'black'){
    //   this.setState({color: 'cyan'})
    // } else {
    //   this.setState({color: 'black'})
    // }
    $("#" + index).toggleClass('selected');
  }
  
  componentDidMount(){
    $('.aFilm').removeClass('selected');
  }

  render(){
    return (
      <div className="aFilmContainer">
          <div id={'test' + this.props.indx} className="aFilm" onClick={()=>{this.toggleFunc('test' + this.props.indx)}}>
            {this.props.movie.title}
          </div>
          <button type="button" onClick={()=>{this.props.removeMovie(this.props.movie.title)}} className="removeButton btn btn-danger">Remove</button>
      </div>
    )
  }
}

export default AFilm