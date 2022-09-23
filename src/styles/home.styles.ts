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
    font-family: "Poppins", Arial;
    font-weight: 400;
    font-size: ${flavor.font.fontSize.sm};
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
    font-family: "Poppins", Arial;
    font-weight: 400;
    font-size: ${flavor.font.fontSize.sm};
  }
`;

export const AboutInfos = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  div {
    display: flex;
    width: 20rem;
    p {
      font-family: "Poppins", Arial;
      font-weight: 400;
      font-size: ${flavor.font.fontSize.sm};
      /* background-color: blue; */
      width: 50%;
      &:first-child {
        /* background-color: green; */
        width: 50%;
      }
    }
  }
`;
