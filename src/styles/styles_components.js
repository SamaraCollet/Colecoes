import styled from "styled-components";
import { Card } from "antd";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardStyled = styled(Card)`
  color: #1f1f1f !important;
  margin: 5px !important;
  width: 220px !important;
  font-weight: bold !important;

  button {
    width: 120px;
    height: 30px;
    background-color: #9191ff;
    color: #fff;
    border: 1px solid #7474e0;
    border-radius: 15px;
    margin-top: 20px;
  }

  button:hover {
    background-color: #6f6fc5;
    border: 1px solid #9494ee;
  }

  @media only screen and (max-width: 767px) {
    width: 40vw !important;
    button {
      width: 30vw;
      height: 45px;
      border-radius: 30px;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 480px) {
    button {
      width: 24vw;
      font-size: 0.9rem;
    }
  }
`;

export const CardStyledMin = styled(CardStyled)`
  width: 180px !important;
  @media only screen and (max-width: 767px) {
    width: 40vw !important;
  }
`;

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
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const ButtonStyled = styled(Button)`
  color: #fff !important;
  margin: 0 30px !important;
  width: 50px !important;
  font-size: 2rem !important;

  @media (max-width: 480px) {
    width: 30px !important;
    margin: 0 3vw !important;
  }
`;
