import styled from "styled-components";

import Button from "@material-ui/core/Button";

export const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  background: #f38cf7;

  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 65px;
  }
`;

export const ButtonStyled = styled(Button)`
  color: #fff !important;
  margin: 0 30px !important;
  width: 50px !important;
  font-size: 2rem !important;
`;
