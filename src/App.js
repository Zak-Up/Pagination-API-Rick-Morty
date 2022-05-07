import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Tittle from "./components/Tittle";


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

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

  return (
    <>
      <Navbar/>
      <div className="container">
        <Tittle/>
      </div>
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPreviuos} onNext={onNext}/>
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
