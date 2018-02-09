import ReactDOM from 'react-dom'
import React from 'react'
import MainDisplay from './MainDisplay.jsx'
import MostViralButton from './MostViralButton.jsx'
import NextButton from './NextButton.jsx'
import PreviousButton from './PreviousButton.jsx'
import FavoriteButton from './FavoriteButton.jsx'
import $ from 'jquery'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        imgurList: [{images:[{link: 'http://media.comicbook.com/2017/09/1-1019679.jpeg'}]}],
        favList:[],
        currIndx: 0
      }
    }

    getMostViral(){
    fetch('http://localhost:3010/hello',
     {
       method: 'GET'
     }
    )
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      this.setState({imgurList: data})
      return data
    }).then(data=>{
      this.setState({currIndx: 0})
      console.log('the imgurList>>>>', this.state.imgurList)
    })
  }

  nextImg(){
    if(this.state.currIndx < 59){
      let tmpIndx = this.state.currIndx + 1
      this.setState({currIndx: tmpIndx})
    }
  }

  prevImg(){
    if(this.state.currIndx > 0){
      let tmpIndx = this.state.currIndx - 1
      this.setState({currIndx: tmpIndx})
    }
  }

  clearList(){
    this.setState({imgurList: []})
  }

  favoritePost(imgArr, gifArr, title){
    fetch('http://localhost:3010/favorite',
     {
      method: 'POST',
      body: JSON.stringify({imgArr: imgArr, gifArr: gifArr, title: title}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log('the response>>> ', res)
    })
  }

  componentWillMount(){

  }

    render(){
      return (
        <div>
          <center>
          <button onClick={this.clearList.bind(this)}>clear imgurlist</button>
          <MostViralButton getMostViral={this.getMostViral.bind(this)}/>
          <br></br>
          <PreviousButton prevImg={this.prevImg.bind(this)} />
          <NextButton nextImg={this.nextImg.bind(this)} />
          {  (this.state.imgurList.length > 0) ?
            <MainDisplay favPost={this.favoritePost} imgurList={this.state.imgurList} currIndx={this.state.currIndx} />
            :
            console.log('hi hi')
          }
          </center>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('myApp'))
