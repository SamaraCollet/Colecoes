import { Switch, Route } from "react-router-dom";

import HomeGalery from "../pages/HomeGalery";
import HomeCollection from "../pages/HomeCollection";
import GaleryRickAndMorty from "../pages/GaleryRickAndMorty";
import GaleryPokemon from "../pages/GaleryPokemon";
import CollectionRickAndMorty from "../pages/CollectionRickAndMorty";
import CollectionPokemon from "../pages/CollectionPokemon";
import ChartPie from "../pages/ChartPie";

const Routes = ({
  addCharRickAndMorty,
  addCharPokemon,
  collectionCharactersRickAndMorty,
  collectionCharactersPokemon,
  removeCharCollectionPokemon,
  removeCharCollectionRickAndMorty,
  totCollectionPokemon,
  totCollectionRickAndMorty,
}) => {
  return (
    <Switch>
      <Route path="/" exact component={HomeGalery} />
      <Route path="/collection" exact component={HomeCollection} />
      <Route exact path="/galeryRickAndMorty">
        <GaleryRickAndMorty
          addCharRickAndMorty={addCharRickAndMorty}
          totCollectionRickAndMorty={totCollectionRickAndMorty}
        />
      </Route>
      <Route exact path="/galeryPokemon">
        <GaleryPokemon
          addCharPokemon={addCharPokemon}
          totCollectionPokemon={totCollectionPokemon}
        />
      </Route>
      <Route exact path="/collectionRickAndMorty">
        <CollectionRickAndMorty
          collectionCharactersRickAndMorty={collectionCharactersRickAndMorty}
          removeCharCollectionRickAndMorty={removeCharCollectionRickAndMorty}
        />
      </Route>
      <Route exact path="/collectionPokemon">
        <CollectionPokemon
          collectionCharactersPokemon={collectionCharactersPokemon}
          removeCharCollectionPokemon={removeCharCollectionPokemon}
        />
      </Route>
      <Route exact path="/chartPie">
        <ChartPie
          totCollectionPokemon={totCollectionPokemon}
          totCollectionRickAndMorty={totCollectionRickAndMorty}
        ></ChartPie>
      </Route>
    </Switch>
  );
};

export default Routes;
