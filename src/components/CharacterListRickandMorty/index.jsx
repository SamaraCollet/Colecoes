import CharacterRickandMorty from "../CharacterRickandMorty";

const CharacterList = ({ list, addCharRickAndMorty }) => {
  return list.map(({ name, image }, index) => (
    <CharacterRickandMorty
      key={index}
      name={name}
      image={image}
      addCharRickAndMorty={addCharRickAndMorty}
    />
  ));
};

export default CharacterList;
