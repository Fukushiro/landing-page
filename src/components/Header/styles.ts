import styled from "styled-components";
import { mdMediaMin } from "../../utils/screenSize";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (${mdMediaMin}) {
    /* width: 700px; */
  }
`;

export const NameTitle = styled.p``;
