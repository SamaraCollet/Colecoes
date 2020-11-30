import { CardStyled } from "../../styles/styles_components";

const CharacterRickAndMorty = ({ name, image, addCharRickAndMorty }) => {
  const { Meta } = CardStyled;
  return (
    <CardStyled
      hoverable
      style={{ width: 220 }}
      cover={<img src={image} alt={name} />}
    >
      <Meta title={name} />
      <button onClick={() => addCharRickAndMorty(name, image)}>
        Add a coleção
      </button>
    </CardStyled>
  );
};

export default CharacterRickAndMorty;
