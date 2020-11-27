import CharacterRickAndMorty from "../CollectionCharRickAndMorty";

const CharacterList = ({ list, removeCharCollectionRickAndMorty }) => {
  return list.map(({ name, image }, index) => (
    <CharacterRickAndMorty
      key={index}
      name={name}
      image={image}
      removeCharCollectionRickAndMorty={removeCharCollectionRickAndMorty}
    />
  ));
};

export default CharacterList;
