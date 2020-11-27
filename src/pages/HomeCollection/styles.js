import styled from "styled-components";

export const Cape = styled.div `
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
`;

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 20px;
    font-size: 2.5rem;
    color: #45b18d;
    text-shadow: 1px 1px 1px #dd72cf;
  }
`;

export const CapeMain = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;