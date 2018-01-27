import React from 'react'
import $ from 'jquery'


class ToWatchTab extends React.Component {
  
 constructor(props){
    super(props);
  }

 componentWillMount(){
    $('.aFilm').removeClass('selected');
  }

 render(){
     return (<div className='toWatchTab' onClick={this.props.displayToWatchTab}>
       To Watch
     </div>)
     }
}

export default ToWatchTab