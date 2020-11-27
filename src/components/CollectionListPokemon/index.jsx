import CharacterPokemon from "../CollectionCharPokemon";

const CharacterList = ({ list, removeCharCollectionPokemon }) => {
  return list.map(({ name, image }, index) => (
    <CharacterPokemon
      key={index}
      name={name}
      image={image}
      removeCharCollectionPokemon={removeCharCollectionPokemon}
    />
  ));
};

export default CharacterList;
