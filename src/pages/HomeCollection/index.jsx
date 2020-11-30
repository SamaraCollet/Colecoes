import { useHistory } from "react-router-dom";
import { CapeMain, Cape, Container } from "../../styles/styles_home";

const CollectionHome = () => {
  const history = useHistory();

  const sendTo = (path) => () => history.push(path);

  return (
    <Container>
      <h1>COLEÇÃO</h1>
      <CapeMain>
        <Cape onClick={sendTo("/collectionRickAndMorty")}>
          <img
            className="imgRickAndMorty"
            src="rick-and-morty-min.png"
            alt="rick and morty"
          />
        </Cape>
        <Cape onClick={sendTo("/CollectionPokemon")}>
          <img className="imgPokemon" src="pokemon-min.png" alt="pokemon" />
        </Cape>
      </CapeMain>
    </Container>
  );
};

export default CollectionHome;
