import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
const[id,setId] = useState("")
const handleChange = (event)=> {
setId(event.target.value)
} 

   return (
      <div className={style.SearchBar}>
      <input type='search' className={style.SearchInput} onChange={handleChange}/>
      <button className={style.SearchButton} onClick={()=> onSearch(id)}
       >Agregar
       </button>
      </div>
   );
}
