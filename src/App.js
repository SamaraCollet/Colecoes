import "antd/dist/antd.css";
import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  const [
    collectionCharactersRickAndMorty,
    setCollectionCharRickAndMorty,
  ] = useState(() => {
    const collection = localStorage.getItem("collectionRickAndMorty");
    if (collection) {
      return JSON.parse(collection);
    }
    return [];
  });

  const [collectionCharactersPokemon, setCollectionCharPokemon] = useState(
    () => {
      const collection = localStorage.getItem("collectionPokemon");
      if (collection) {
        return JSON.parse(collection);
      }
      return [];
    }
  );

  const addCharRickAndMorty = (name, image) => {
    const newChar = { name, image };
    const alreadyExist = collectionCharactersRickAndMorty.find(
      (element) => element.name === name
    );
    if (alreadyExist) return;
    setCollectionCharRickAndMorty([
      ...collectionCharactersRickAndMorty,
      newChar,
    ]);
  };

  const addCharPokemon = (name, image) => {
    const newChar = { name, image };
    const alreadyExist = collectionCharactersPokemon.find(
      (element) => element.name === name
    );
    if (alreadyExist) return;

    setCollectionCharPokemon([...collectionCharactersPokemon, newChar]);
  };

  const removeCharCollectionRickAndMorty = (name) => {
    setCollectionCharRickAndMorty(
      collectionCharactersRickAndMorty.filter((char) => char.name !== name)
    );
  };

  const removeCharCollectionPokemon = (name) => {
    setCollectionCharPokemon(
      collectionCharactersPokemon.filter((char) => char.name !== name)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "collectionRickAndMorty",
      JSON.stringify(collectionCharactersRickAndMorty)
    );
    localStorage.setItem(
      "collectionPokemon",
      JSON.stringify(collectionCharactersPokemon)
    );
  }, [collectionCharactersRickAndMorty, collectionCharactersPokemon]);

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
