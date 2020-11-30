import { Container } from "../../styles/styles_pages";
import CharacterList from "../../components/CollectionListRickAndMorty";

const CollectionRickAndMorty = ({
  collectionCharactersRickAndMorty,
  removeCharCollectionRickAndMorty,
}) => {
  return (
    <Container>
      <h1>Coleção Rick and Morty</h1>
      <h2>Total na Coleção {collectionCharactersRickAndMorty.length}</h2>
      <div className="showCharacters">
        <CharacterList
          list={collectionCharactersRickAndMorty}
          removeCharCollectionRickAndMorty={removeCharCollectionRickAndMorty}
        />
      </div>
    </Container>
  );
};

export default CollectionRickAndMorty;
