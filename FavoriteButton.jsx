import React from 'react'

const FavoriteButton = (props) => {
  var favoritePost = function(){
    props.favPost(props.imgArr, props.gifArr, props.title)
  }
  return (
    <button className='favoriteButn' onClick={favoritePost} >
    Favorite
    </button>
  )
}

export default FavoriteButton