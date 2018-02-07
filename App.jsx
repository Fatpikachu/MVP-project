import ReactDOM from 'react-dom'
import React from 'react'
import MainDisplay from './MainDisplay.jsx'
import MostViralButton from './MostViralButton.jsx'
import NextButton from './NextButton.jsx'
import PreviousButton from './PreviousButton.jsx'
import $ from 'jquery'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        imgurList: [{images:[{link: 'http://media.comicbook.com/2017/09/1-1019679.jpeg'}]}],
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

    render(){
      return (
        <div>
          <MostViralButton getMostViral={this.getMostViral.bind(this)}/>
          <br></br>
          <PreviousButton prevImg={this.prevImg.bind(this)} />
          <NextButton nextImg={this.nextImg.bind(this)} />
          <MainDisplay imgurList={this.state.imgurList} currIndx={this.state.currIndx} />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('myApp'))
