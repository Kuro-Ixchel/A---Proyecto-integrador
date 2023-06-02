import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import style from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx';
import axios from 'axios';
import Detail from './components/Detail/Detail.jsx';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App () {

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
     
      setAccess(data);
      access && navigate('/home');
     
    } catch (error) {
      console.log(error.message);
    }
 };

  const onSearch = async(id) =>{
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)     
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
        } catch (error) {
             alert('El personage ya se muestra en pantalla.');
    }
  };



  const onClose = (id)=>{
    setCharacters(characters.filter(char=>char.id!==id))
    };

 
  const [characters, setCharacters] = useState([]);
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}> <Nav onSearch={onSearch}/> </div>

      <Routes>
        <Route 
        path= "/home" 
        element={<Cards characters={characters} onClose={onClose}/>} />

        <Route path="/about" element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  );
}



export default App;



