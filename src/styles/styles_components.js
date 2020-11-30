import styled from "styled-components";
import { Card } from "antd";

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
`;

export const CardStyledMin = styled(CardStyled)`
  width: 180px !important;
  @media only screen and (max-width: 767px) {
    width: 40vw !important;
  }
`;
