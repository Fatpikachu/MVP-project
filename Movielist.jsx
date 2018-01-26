import React from 'react'
import AFilm from './AFilm.jsx'

const Movielist = (props) => {
  return (
    <div className="listGroup">
    {props.showMovies.map((movie, i) =>
       <AFilm key={i} movie={movie} toggleSeen={props.toggleSeen} movieName={movie.title} removeMovie={props.removeMovie} />
      )}
    </div>
  )
}

export default Movielist