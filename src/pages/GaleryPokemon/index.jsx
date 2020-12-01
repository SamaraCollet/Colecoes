import { Container } from "../../styles/styles_pages";
import { useState, useEffect } from "react";
import CharacterList from "../../components/CharacterListPokemon";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const GaleryPokemon = ({ addCharPokemon, totCollectionPokemon }) => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages] = useState(8);
  const [offset, setOffset] = useState(0);
  const myURL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

  useEffect(() => {
    fetch(myURL)
      .then((res) => res.json())
      .then((body) => {
        setCharacterList(body.results);
      });
  }, [page]); // eslint-disable-line

  const nextPage = () => {
    setPage(page + 1);
    setOffset(offset + 20);
  };

  const previousPage = () => {
    setPage(page - 1);
    setOffset(offset - 20);
  };

  console.log(characterList);
  return (
    <Container>
      <div className="subMenu">
        {page > 1 ? (
          <button className="buttonSubmenu" onClick={previousPage}>
            <FaAngleLeft />
          </button>
        ) : (
          <button className="invisible buttonSubmenu"></button>
        )}
        <div>
          <h1>Pokemon Galeria</h1>
          <h2>
            pag {page} /{totalPages} - Coleção {totCollectionPokemon}
          </h2>
        </div>
        {page >= totalPages ? (
          <button className="invisible buttonSubmenu"></button>
        ) : (
          <button className="buttonSubmenu" onClick={nextPage}>
            <FaAngleRight />
          </button>
        )}
      </div>
      <div className="showCharacters">
        <CharacterList list={characterList} addCharPokemon={addCharPokemon} />
      </div>
    </Container>
  );
};

export default GaleryPokemon;
