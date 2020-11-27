import CharacterPokemon from "../CharacterPokemon";

const CharacterList = ({ list, addCharPokemon }) => {
  return list.map(({ name, url }, index) => (
    <CharacterPokemon
      key={index}
      name={name}
      url={url}
      addCharPokemon={addCharPokemon}
    />
  ));
};

export default CharacterList;
