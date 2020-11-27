import { Container } from "./styles";
import { useState, useEffect } from "react";
import CharacterList from "../../components/CharacterListRickandMorty";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const GaleryRickAndMorty = ({
  addCharRickAndMorty,
  totCollectionRickAndMorty,
}) => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const myURL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    fetch(myURL)
      .then((res) => res.json())
      .then((body) => {
        setCharacterList(body.results);
        setTotalPages(body.info.pages);
      });
  }, [page]); // eslint-disable-line

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <div className="subMenu">
        {page > 1 ? (
          <button className="buttonSubmenu" onClick={previousPage}>
            <FaAngleLeft />
          </button>
        ) : (
          <button className="invisible"></button>
        )}
        <div>
          <h1>Rick and Morty Galeria</h1>
          <h2>
            pag {page} /{totalPages} - Coleção {totCollectionRickAndMorty}
          </h2>
        </div>
        {page >= totalPages ? (
          <button className="invisible"></button>
        ) : (
          <button className="buttonSubmenu" onClick={nextPage}>
            <FaAngleRight />
          </button>
        )}
      </div>
      <div className="showCharacters">
        <CharacterList
          list={characterList}
          addCharRickAndMorty={addCharRickAndMorty}
        />
      </div>
    </Container>
  );
};

export default GaleryRickAndMorty;
