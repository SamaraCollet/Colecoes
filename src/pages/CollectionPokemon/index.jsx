import { Container } from "./styles";
import CharacterList from "../../components/CollectionListPokemon";

const CollectionPokemon = ({
  collectionCharactersPokemon,
  removeCharCollectionPokemon,
}) => {
  return (
    <Container>
      <h1>Coleção Pokemon</h1>
      <h2>Total na Coleção {collectionCharactersPokemon.length}</h2>
      <div className="showCharacters">
        <CharacterList
          list={collectionCharactersPokemon}
          removeCharCollectionPokemon={removeCharCollectionPokemon}
        />
      </div>
    </Container>
  );
};

export default CollectionPokemon;
