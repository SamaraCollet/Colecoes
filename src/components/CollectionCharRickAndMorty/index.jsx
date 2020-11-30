import { CardStyledMin } from "../../styles/styles_components";

const CharacterRickAndMorty = ({
  name,
  image,
  removeCharCollectionRickAndMorty,
}) => {
  const { Meta } = CardStyledMin;

  return (
    <CardStyledMin
      hoverable
      cover={<img src={image} alt={name} />}
      onClick={() => removeCharCollectionRickAndMorty(name)}
    >
      <Meta title={name} description="clique para excluir" />
    </CardStyledMin>
  );
};

export default CharacterRickAndMorty;
