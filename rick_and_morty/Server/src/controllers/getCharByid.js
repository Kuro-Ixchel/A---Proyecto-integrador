const axios = require('axios');
/*

const getCharByid = (response, id) =>{
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((result) => result.data)
.then((data) => {
    let character ={
        id: data.id,
        name: data.name,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
        status: data.satatus,
        species: data.species,
    }
  response.writeHead(200, {'Content-type':'application/json'}).end
  (JSON.stringify(character))  
})
.catch((error)=>response.writeHead(500, {'Content-type': 'text/plain'}).end
(error.message))
}

module.exports = {
    getCharByid,
}
*/
const URL = 'https://rickandmortyapi.com/api/character'

const getCharByid = async (res, req) =>{

    try {
        const {id} = req.params
        const {data}= await axios(`${URl}/${id}`)
        
        if(!data.name) throw Error(`No tenemos los datos del personaje con el id: ${id} Not fount`)   
            const character={
                id:  data.id,
                name: data.name,
                image: data.image,
                status: data.status,
                gender: data.gender,
                origin: data.origin,
                species: data.species,
            }
            return res.status(200).json(character);
         //return res.status(404).send('Not fount');        
    } catch (error) {
        return error.message.includes(`id`)
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)   
    };

}


module.exports={
getCharByid
}

