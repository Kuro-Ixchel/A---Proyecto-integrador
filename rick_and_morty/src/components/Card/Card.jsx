import {Link} from "react-router-dom"
import style from "./Card.module.css"

export default function Card({ id, name, species, gender, image, onClose}) {
   return (
      <div className={style.cardContainer}>

       <button onClick={()=> onClose(id)} className= {style.closeButton}> X </button>
         
        <Link to={`/detail/${id}`} >
        <h2 className={style.name}>Name: {name} </h2>
        </Link>

         <h2 className={style.name}>ID: "{id}"</h2>
         <img className={style.image} src={image} alt="Not found" /> 
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
