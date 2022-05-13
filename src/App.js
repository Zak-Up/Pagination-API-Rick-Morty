import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [texto, setTexto] = useState('');

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPreviuos = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const filterCharacter = characters.filter(el => el.name.toLowerCase().includes(texto.toLocaleLowerCase()))

  return (
    <>
      <Navbar/>
      {/* <div className="container">
        <Tittle/>
      </div> */}
      <div className="container">
        <Filter
        texto={texto}
        setTexto={setTexto}
        />
      </div>
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPreviuos} onNext={onNext}/>
        <Characters
        texto={texto} 
        characters={filterCharacter}/>
      </div>
    </>
  );
}

export default App;
