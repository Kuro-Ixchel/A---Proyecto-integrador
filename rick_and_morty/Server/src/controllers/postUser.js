const {User} = require('../DB_connection');


const postUser = async (req, res)=>{
    const {email, password}= req.body
    try {
        if(email && password){
            return
        }return res.status(400).json({message:'Faltan datos'})
    } catch (error) {
        
    }
}


module.exports={
postUser
}