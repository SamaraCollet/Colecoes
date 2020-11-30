import { CardStyled } from "../../styles/styles_components";

const CharacterPokemon = ({ name, url, addCharPokemon }) => {
  const { Meta } = CardStyled;
  const brokenUrl = url.split("/");
  const id = brokenUrl[brokenUrl.length - 2];
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <CardStyled hoverable cover={<img src={image} alt={name} />}>
      <Meta title={nameUpper} />
      <button onClick={() => addCharPokemon(name, image)}>Add a coleção</button>
    </CardStyled>
  );
};

export default CharacterPokemon;
