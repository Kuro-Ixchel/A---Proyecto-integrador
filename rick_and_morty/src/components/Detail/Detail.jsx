import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () =>{
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

useEffect(() => {
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = 'ad18cc96ece3.65679ed52484638fb6a3';

axios( `${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
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