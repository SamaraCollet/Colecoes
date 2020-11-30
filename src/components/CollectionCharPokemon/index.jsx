import { CardStyledMin } from "../../styles/styles_components";

const CharacterPokemon = ({ name, image, removeCharCollectionPokemon }) => {
  const { Meta } = CardStyledMin;
  const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <CardStyledMin
      hoverable
      cover={<img src={image} alt={name} />}
      onClick={() => removeCharCollectionPokemon(name)}
    >
      <Meta title={nameUpper} description="clique para excluir" />
    </CardStyledMin>
  );
};

export default CharacterPokemon;
