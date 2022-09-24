import styled from "styled-components";
import {
  lgMediaMin,
  lgMin,
  mdMediaMin,
  mdMin,
  xlMediaMin,
} from "../utils/screenSize";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  header {
    margin-top: 1rem;
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

export const ProjectsList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
