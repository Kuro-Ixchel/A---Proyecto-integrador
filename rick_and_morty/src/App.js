import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'
import style from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'

function App () {

  function onSearch(id) {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'ad18cc96ece3.65679ed52484638fb6a3'

    if(characters.find(char=>char.id === id)){
      return alert ('El personage ya se muestra en pantalla');
    }
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) setCharacters((oldChars) => [...oldChars, data]);
           else alert('El personage ya se muestra en pantalla.');
       });}

 const onClose = (id)=>{
  setCharacters(characters.filter(char=>char.id!==id))
 }

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



