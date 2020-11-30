import styled from "styled-components";

export const Container = styled.div `
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  margin-top: 30px;
  text-align: center;

  h1 {
    font-family: "Fredoka One", cursive;
    margin-top: 20px;
    font-size: 2.5rem;
    color: #32f5b4;
    text-shadow: 1px 1px 1px #dd72cf;
  }

  .subMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .showCharacters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .invisible {
    visibility: hidden;
  }

  .buttonSubmenu {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    color: #fff;
    background-color: pink;
    border: 4px solid #faa8a8;
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonSubmenu:hover {
    background-color: #f2abbb;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.1rem;
    }
    .showCharacters {
      width: 100vw;
    }
    .subMenu {
      width: 100vw;
      padding: 0 20px;
    }
    .buttonSubmenu {
      font-size: 3rem;
    }
  }
`;