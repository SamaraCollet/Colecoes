import styled from "styled-components";

export const Container = styled.div `
  margin-top: 30px;
  text-align: center;

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
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonSubmenu:hover {
    background-color: #f2abbb;
  }
`;