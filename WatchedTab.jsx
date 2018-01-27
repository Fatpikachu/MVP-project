import React from 'react'
import $ from 'jquery'


class WatchedTab extends React.Component {

  constructor(props){
    super(props);
  }
  
 componentWillMount(){
    $('.aFilm').removeClass('selected');
  }

 render(){
  return (<div className='watchTab' onClick={this.props.displayWatchedTab}>
   Watched
 </div>)
 }
}

export default WatchedTab