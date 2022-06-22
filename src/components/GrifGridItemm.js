import React from 'react'
//export const GrifGridItemm = ({img}) => {
 
export const GrifGridItemm = ({id,title,url}) => {
 
    //console.log(img.id, img.title, img.url);
    return (
     <div className='card'> 
         <img src={url} alt={title} id={id} /> 
     {/* <img src= {img.url}  />  */}
      </div>
  )
}
