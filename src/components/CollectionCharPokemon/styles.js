import styled from "styled-components";
import { Card } from "antd";

export const CardStyled = styled(Card)`
  color: #fff !important;
  margin: 5px !important;

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
`;
