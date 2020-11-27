import "antd/dist/antd.css";
import GlobalStyle from "./styles/global";
import { useState } from "react";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  const [
    collectionCharactersRickAndMorty,
    setCollectionCharRickAndMorty,
  ] = useState([]);
  const [collectionCharactersPokemon, setCollectionCharPokemon] = useState([]);

  const addCharRickAndMorty = (name, image) => {
    const newChar = { name, image };
    setCollectionCharRickAndMorty([
      ...collectionCharactersRickAndMorty,
      newChar,
    ]);
  };

  const addCharPokemon = (name, image) => {
    const newChar = { name, image };
    setCollectionCharPokemon([...collectionCharactersPokemon, newChar]);
  };

  const removeCharCollectionPokemon = (name) => {
    setCollectionCharPokemon(
      collectionCharactersPokemon.filter((char) => char.name !== name)
    );
  };

  const removeCharCollectionRickAndMorty = (name) => {
    setCollectionCharRickAndMorty(
      collectionCharactersRickAndMorty.filter((char) => char.name !== name)
    );
  };

  const totCollectionRickAndMorty = collectionCharactersRickAndMorty.length;
  const totCollectionPokemon = collectionCharactersPokemon.length;

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <div id="main-container">
        <Routes
          addCharRickAndMorty={addCharRickAndMorty}
          addCharPokemon={addCharPokemon}
          collectionCharactersPokemon={collectionCharactersPokemon}
          collectionCharactersRickAndMorty={collectionCharactersRickAndMorty}
          removeCharCollectionPokemon={removeCharCollectionPokemon}
          removeCharCollectionRickAndMorty={removeCharCollectionRickAndMorty}
          totCollectionRickAndMorty={totCollectionRickAndMorty}
          totCollectionPokemon={totCollectionPokemon}
        />
      </div>
    </>
  );
}

export default App;
