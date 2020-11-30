import styled from "styled-components";

export const Cape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 20px 60px;
  border-radius: 300px;

  :hover {
    background-color: #aadbfc;
  }
  .imgRickAndMorty {
    width: 500px;
  }
  .imgRickAndMorty:hover {
    width: 550px;
  }
  .imgPokemon {
    width: 450px;
  }
  .imgPokemon:hover {
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    width: 30vw;
    height: 30vh;
    margin: 5vh 5vw;

    .imgRickAndMorty {
      width: 45vw;
    }
    .imgPokemon {
      width: 40vw;
    }
    .imgRickAndMorty:hover {
      width: 50vw;
    }
    .imgPokemon:hover {
      width: 43vw;
    }
    :hover {
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 37vh;
    margin: 0;

    .imgRickAndMorty {
      width: 320px;
    }
    .imgPokemon {
      width: 270px;
    }
    :hover {
      background-color: transparent;
    }
    .imgRickAndMorty:hover {
      width: 400px;
    }
    .imgPokemon:hover {
      width: 350px;
    }
  }
`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Fredoka One", cursive;
    margin-top: 20px;
    font-size: 4rem;
    color: #32f5b4;
    text-shadow: 1px 1px 1px #dd72cf;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 90vh;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const CapeMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (min-width: 768px) and (max-width: 979px) {
    width: 65vw;
    margin-top: 15vh;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
  }
`;
