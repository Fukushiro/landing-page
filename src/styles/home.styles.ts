import styled from "styled-components";
import { flavor } from "../flavors";
import { lgMediaMin, lgMin, mdMediaMin, mdMin } from "../utils/screenSize";

export const Container = styled.div`
  header {
    margin-top: 1rem;
  }
  /* background-color: red; */
  @media (${mdMediaMin}) {
    /* background-color: blue; */
  }
  @media (${lgMediaMin}) {
    /* background-color: green; */
  }
`;

export const Content = styled.div`
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

export const Welcome = styled.div`
  margin-top: 8rem;

  h1 {
    font-size: ${flavor.font.fontSize.md};
    font-family: "Poppins", Arial;
    color: #ff4a57;
    font-weight: 700;
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: "Poppins", Arial;

    font-size: ${flavor.font.fontSize.sm};
  }
  p {
    line-height: 1.5rem;
  }
  ul {
    list-style: none;
    margin-top: 0.5rem;

    li {
      a {
        text-decoration: none;
        color: white;
      }
      div {
        width: 1rem;
        height: 1rem;
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const About = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: ${flavor.font.fontSize.md};
    font-family: "Poppins", Arial;
    font-weight: 700;
  }
  p {
    line-height: 1.5rem;
  }
`;
