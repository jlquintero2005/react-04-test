import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {
  //const Categories = ['One Punch','Samurai X','Dragon Ball'];
  //const [Categories, setCategories] =   useState(['One Punch','Samurai X','Dragon Ball']);
//   const handleAdd = () =>{
//       //poner al final del arreglo manteniendo los valores anteriores
//         //setCategories([...Categories,'Iroman']); 
//                       //poner al inicio del arreglo
//         setCategories(['Iroman', ...Categories]);  
//      }

// segundo ejercicio
const [Categories, setCategories] =   useState(['Dragon Ball']);

    return (
    <>
    <h2 >GifExpertApp</h2>
     <AddCategory setCategories={setCategories} /> 
    <hr />
     {/* <button onClick={handleAdd()}> Dar Click</button>  */}
     <ol >
        {
            // Categories.map(category => {
            //  return  <li key={category}>{category}</li>                         
            // })
            Categories.map(category => (
                   <GifGrid
                    key= {category}
                    category={category} 
                    /> 
            ))
        } 
     </ol> 
   </>
  )
}


export default GifExpertApp