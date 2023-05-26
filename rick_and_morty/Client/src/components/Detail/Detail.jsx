import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({});

useEffect(() => {
axios( `http://localhost:3001/rickandmorty/character/${id}`).then((response) =>
setCharacter(response.data)
);
});

return (

<div>
    <h2>{character.name}</h2>
    <p>{character.status}</p>
    <p>{character.species}</p>
    <p>{character.gender}</p>
    <p>{character.origin.name}</p>
    <img src={character.image} alt="img" />
</div>
);
};

export default Detail;