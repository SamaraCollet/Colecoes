import { Container } from "../../styles/styles_pages";
import { Pie } from "react-chartjs-2";

const ChartPie = ({ totCollectionRickAndMorty, totCollectionPokemon }) => {
  const outOfCollection =
    831 - totCollectionPokemon - totCollectionRickAndMorty;

  const data = {
    labels: ["Fora da coleção", "Coleção Rick and Morty", "Coleção Pokemon"],
    datasets: [
      {
        data: [
          outOfCollection,
          totCollectionRickAndMorty,
          totCollectionPokemon,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Container>
      <Pie data={data} />
    </Container>
  );
};

export default ChartPie;
