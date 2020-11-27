import { useHistory } from "react-router-dom";
import { CapeMain, Cape, Container } from "./styles";

const HomeGalery = () => {
  const history = useHistory();

  const sendTo = (path) => () => history.push(path);

  return (
    <Container>
      <h1>GALERIA</h1>
      <CapeMain>
        <Cape onClick={sendTo("/galeryRickAndMorty")}>
          <img
            className="imgRickAndMorty"
            src="https://www.pngkey.com/png/full/3-36122_rick-morty-png-rick-and-morty-out-of.png"
            alt="rick and morty"
          />
        </Cape>
        <Cape onClick={sendTo("/galeryPokemon")}>
          <img
            className="imgPokemon"
            src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG-1200x1200.png"
            alt="pokemon"
          />
        </Cape>
      </CapeMain>
    </Container>
  );
};

export default HomeGalery;
