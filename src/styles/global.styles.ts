import styled, { createGlobalStyle } from "styled-components";
import {
  lgMediaMin,
  lgMin,
  mdMediaMin,
  mdMin,
  xlMediaMin,
} from "../utils/screenSize";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    body {
        background-color: #191b2a;
        color: white
    }
`;

export const Content = styled.div`
  width: 90%;

  @media (${mdMediaMin}) {
    width: 80%;
  }
  @media (${lgMediaMin}) {
    width: 70%;
  }
  @media (${xlMediaMin}) {
    width: 50%;
  }
`;
