import { useHistory } from "react-router-dom";
import { CapeMain, Cape, Container } from "../../styles/styles_home";

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
            src="rick-and-morty-min.png"
            alt="rick and morty"
          />
        </Cape>
        <Cape onClick={sendTo("/galeryPokemon")}>
          <img className="imgPokemon" src="pokemon-min.png" alt="pokemon" />
        </Cape>
      </CapeMain>
    </Container>
  );
};

export default HomeGalery;
