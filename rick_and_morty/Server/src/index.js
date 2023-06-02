const server = require('../../Client/src/App');
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({forse: true}).then(()=>{
   server.listen(PORT, () =>  console.log('Server raised in port: ' + PORT));
})