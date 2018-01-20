import ReactDOM from 'react-dom'
import React from 'react'
import Movielist from './Movielist.jsx'
import SearchBar from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import AFilm from './AFilm.jsx'
import WatchedTab from './WatchedTab.jsx'
import ToWatchTab from './ToWatchTab.jsx'
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
        showList: []
      }
    }

    searchMovie(){
      var str = $(".toSearch").val().toLowerCase();
      var allMovies = this.state.movieList;
      var newlist = allMovies.filter((titles) => (
          titles.title.toLowerCase().includes(str)
        )
      )
      if(newlist.length === 0){
        alert('nothing found');
      }
      $(".toWatchTab").css("background-color", "white")
      $(".watchTab").css("background-color", "white")
      this.setState({showList: newlist});
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
      // $(".aFilm").css("color", "black")
      this.setState({showList: tmpList});
    }

    displayToWatchTab(){
      var tmpList = this.state.movieList.slice(0);
      tmpList = tmpList.filter((movie) => (
        movie.seen === false
      ))
      $(".toWatchTab").css("background-color", "cyan")
      $(".watchTab").css("background-color", "white")
      // $(".aFilm").css("color", "black")
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
          <Movielist defaultColor={"black"} showMovies={this.state.showList} toggleSeen={this.toggleSeen.bind(this)} removeMovie={this.removeMovie.bind(this)} />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('myApp'))
