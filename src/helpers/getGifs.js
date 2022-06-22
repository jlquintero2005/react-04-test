export const getGif= async(category) =>{
    const url= `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=1oceDgIJ8XDSE6JhHg7P9RG3nt1PHcJY`
    const resp = await fetch(url);
    const {data}= await resp.json();
     const gifs= data.map(img =>{
         return {
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url
         }  
     })
    return gifs;
   }