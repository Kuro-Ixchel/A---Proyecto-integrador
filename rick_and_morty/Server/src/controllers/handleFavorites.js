let myFavorites = [];

const postFav = (res, req) =>{
//  myFavorites.push(req.body)
    const character = req.body
    myFavorites.push(character)
    return res.status(200).json(myFavorites)
};

const deleteFav = (req, res) => {
    const {id} = req.params
    myFavorites = myFavorites.filter((favorite)=> favorite.id !== +id);
    return res.status(200).json(myFavorites)
};

module.exports={
    postFav,
    deleteFav
};