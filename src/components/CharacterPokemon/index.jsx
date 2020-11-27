import { CardStyled } from "./styles";

const CharacterPokemon = ({ name, url, addCharPokemon }) => {
  const { Meta } = CardStyled;
  const brokenUrl = url.split("/");
  const id = brokenUrl[brokenUrl.length - 2];
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <CardStyled
      hoverable
      style={{ width: 220 }}
      cover={<img src={image} alt={name} />}
    >
      <Meta title={name} />
      <button onClick={() => addCharPokemon(name, image)}>Add a coleção</button>
    </CardStyled>
  );
};

export default CharacterPokemon;
