import { CardStyled } from "./styles";

const CharacterRickAndMorty = ({
  name,
  image,
  removeCharCollectionRickAndMorty,
}) => {
  const { Meta } = CardStyled;

  return (
    <CardStyled
      hoverable
      style={{ width: 180 }}
      cover={<img src={image} alt={name} />}
      onClick={() => removeCharCollectionRickAndMorty(name)}
    >
      <Meta title={name} description="clique para excluir" />
    </CardStyled>
  );
};

export default CharacterRickAndMorty;
