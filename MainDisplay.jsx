import React from 'react'
import AutoFitImage from 'react-image-autofit-frame';
import Iframe from 'react-iframe'

const MainDisplay = (props) => {
  let imgLink;
  let data = props.imgurList[props.currIndx]
  let isGif = false;
  if(data.images === undefined){
    imgLink = data.gifv
    isGif = true;
  } else if(data.images[0].gifv !== undefined){
    imgLink = data.images[0].gifv
    isGif = true;
  } else {
    imgLink = data.images.map((img)=>{
      return img.link
    })
  }
  

  return (
    <div className="mainDisplay">
      <h3>{data.title}</h3>
      <h2>{console.log(imgLink)}</h2>
      
        
        <p>{data.description}</p>
      { 
        isGif ?
        <Iframe url={imgLink}
          width="800px"
          height="1000px"
          display="block"
          position="relative"/>
       : 
        imgLink.map((link, i)=>{
          return <img key={i} src={link} width="800"/>
        })
      }
    </div>
  )
}

export default MainDisplay

//height="500px" width="500px"