const {getCharByid} = require('../controllers/getCharByid');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const {login} = require('../controllers/login');
const router = require('express').Router();

/*
router.use('/character:id', getCharByid);
router.use('/login', login);
router.use('/fav', postFav); 
router.use('/fav/:id', deleteFav);
*/

router.get('/character:id', getCharByid);
router.get('/login', login);
router.post('/fav',(req, res) => postFav(req,res));
router.delete('/fav/:id',(req, res) => deleteFav(req,res));


module.exports= router;