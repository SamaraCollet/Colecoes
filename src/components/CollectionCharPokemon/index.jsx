import { CardStyled } from "./styles";

const CharacterPokemon = ({ name, image, removeCharCollectionPokemon }) => {
  const { Meta } = CardStyled;

  return (
    <CardStyled
      hoverable
      style={{ width: 180 }}
      cover={<img src={image} alt={name} />}
      onClick={() => removeCharCollectionPokemon(name)}
    >
      <Meta title={name} description="clique para excluir" />
    </CardStyled>
  );
};

export default CharacterPokemon;
