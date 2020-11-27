import styled from "styled-components";

export const Container = styled.div `
  margin-top: 30px;
  text-align: center;

  h1 {
    margin-top: 20px;
    font-size: 2.5rem;
    color: #45b18d;
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
    border: 2px solid #f8adeb;
    font-size: 2rem;
  }
`;