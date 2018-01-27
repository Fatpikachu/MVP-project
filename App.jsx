import ReactDOM from 'react-dom'
import React from 'react'
import Movielist from './Movielist.jsx'
import SearchBar from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import AFilm from './AFilm.jsx'
import WatchedTab from './WatchedTab.jsx'
import ToWatchTab from './ToWatchTab.jsx'
import SearchList from './SearchList.jsx'
import $ from 'jquery'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        movieList: [
        {title: 'Naruto', seen: false},
        {title: 'one punch man', seen: true},
        {title: 'Fairy Tail', seen: true},
        {title: 'Dragon ball Z', seen: false},
        {title: 'One Piece', seen: false}
        ],
        showList: [],
        searchList: []
      }
    }

    searchMovie(){
      var input = $(".toSearch").val()//.toLowerCase();
      // var allMovies = this.state.movieList;
      // var newlist = allMovies.filter((titles) => (
      //     titles.title.toLowerCase().includes(str)
      //   )
      // )
      // if(newlist.length === 0){
      //   alert('nothing found');
      // }
      
      fetch('https://api.themoviedb.org/3/movie/550?api_key=cdff0056822332d795254955a7791f79&query=' 
        + input,
      {
        // method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      })
      .then((res) => {
        //console.log(res.json())
        return res.json()
      }).then(res => {
        console.log(res)
      })
      // var url = 'http://api.themoviedb.org/3/';
      // var mode = 'search/movie?query=';
      // var key = '&api_key=cdff0056822332d795254955a7791f79'
      // $.ajax({
      //       type: 'GET',
      //       url: url + mode + input + key,
      //       async: false,
      //       jsonpCallback: 'testing',
      //       contentType: 'application/json',
      //       dataType: 'jsonp',
      //       success: function(json) {
      //           console.log(json);
      //       },
      //       error: function(e) {
      //           console.log(e.message);
      //       }
      //   });
      $(".toWatchTab").css("background-color", "white")
      $(".watchTab").css("background-color", "white")
      //this.setState({showList: newlist});
    }

    toggleSeen(movieName){
      var tmpList = this.state.movieList.slice(0);
      tmpList.forEach((movie, i) => {
        if(movie.title === movieName){
          tmpList[i].seen = !tmpList[i].seen
        };
      })
      this.setState({movieList: tmpList});
      //console.log('entered toggle seeen')
    }

    displayWatchedTab(){
      var tmpList = this.state.movieList.slice(0);
      tmpList = tmpList.filter((movie) => (
        movie.seen ===  true
      ))
      $(".toWatchTab").css("background-color", "white")
      $(".watchTab").css("background-color", "cyan")
      this.setState({showList: tmpList});
      
    }

    displayToWatchTab(){
      var tmpList = this.state.movieList.slice(0);
      tmpList = tmpList.filter((movie) => (
        movie.seen === false
      ))
      $(".toWatchTab").css("background-color", "cyan")
      $(".watchTab").css("background-color", "white")
      this.setState({showList: tmpList});
    }

    addAMovie(){
      var toAdd = $(".toAdd").val();
      var tmpList = this.state.movieList.slice(0);
      tmpList.push({title: toAdd, seen: false});
      this.setState({movieList: tmpList}, ()=> {;
        this.displayToWatchTab()
      });
    }

    removeMovie(movieName){
      var tmpList = this.state.movieList.slice(0);
      tmpList = tmpList.filter((movie) => (
        movie.title !== movieName
      ));
      var tmpShowList = this.state.showList.slice(0);
      tmpShowList = tmpShowList.filter((movie) => (
        movie.title !== movieName
      ));
      this.setState({movieList: tmpList});
      this.setState({showList: tmpShowList});
    }

    render(){
      return (
        <div>
          <h1 className='title'>Movie List</h1>
          <AddMovie addAMovie={this.addAMovie.bind(this)} displayToWatchTab={this.displayToWatchTab.bind(this)} />
          <SearchBar doSearch={this.searchMovie.bind(this)} />
          <div>
            <WatchedTab displayWatchedTab={this.displayWatchedTab.bind(this)} />
            <ToWatchTab displayToWatchTab={this.displayToWatchTab.bind(this)} />
          </div>
          <Movielist showMovies={this.state.showList} toggleSeen={this.toggleSeen.bind(this)} removeMovie={this.removeMovie.bind(this)} />
          <SearchList />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('myApp'))
