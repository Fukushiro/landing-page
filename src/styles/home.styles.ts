import styled from "styled-components";
import { lgMin, mdMin } from "../utils/screenSize";

export const Container = styled.div`
  /* background-color: red; */
  @media (min-width: ${mdMin}px) {
    /* background-color: blue; */
  }
  @media (min-width: ${lgMin}px) {
    /* background-color: green; */
  }
`;
