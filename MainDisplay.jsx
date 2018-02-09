import React from 'react'
import AutoFitImage from 'react-image-autofit-frame';
import Iframe from 'react-iframe'
import FavoriteButton from './FavoriteButton.jsx'

const MainDisplay = (props) => {
  let imgLink = [];
  let gifLink = [];
  let data = props.imgurList[props.currIndx]
  let id = data.id
  let isGif = false;
  if(data.images){
    data.images.forEach((link)=>{
      let linkObj = {id: id}
      if(link.description){
        linkObj.description = link.description
      }
      if(link.gifv){
        linkObj.link = link.gifv
        gifLink.push(linkObj)
      } else {
        linkObj.link = link.link
        imgLink.push(linkObj)
      }
    })
  } else if(data.gifv ||data.gif){
    let linkObj = {id: id, link: data.gifv || data.gif }
    gifLink.push(linkObj)
  } else {
    let linkObj = {id: id, link: data.link}
    imgLink.push(linkObj)
  }


  return (
    <div className="mainDisplay">
    <FavoriteButton favPost={props.favPost} imgArr={imgLink} gifArr={gifLink} title={data.title} />
    <center>
      <h3>{data.title}</h3>
      <h2>{console.log("the imgLink>>>", imgLink)}</h2> 
      <h2>{console.log("the gifLink>>>", gifLink)}</h2> 
      <p>{data.description}</p>
      { 
        imgLink.map((link, i)=>{
          return (<div key={i}>
          <img src={link.link} width="500"/>
          <p>{link.description}</p>
          </div>)
        })
      }
      {
        gifLink.map((link, i)=>{
          return (<div key={i}>
          <iframe src={link.link}
          width={"800"}
          height={"800"}
          frameBorder={0}
          align={"middle"}></iframe>
          <p>{link.description}</p>
          </div>)
        })
      }
      </center>
    </div>
  )
}

export default MainDisplay