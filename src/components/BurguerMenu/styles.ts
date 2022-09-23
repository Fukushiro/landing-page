import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  right: 0;
  background-color: black;
  z-index: 999;
  width: 13rem;
  ul {
    list-style: none;
    li {
      /* background-color: red; */
      padding: 0.5rem 1rem 0.5rem 1rem;

      &:first-child {
        margin-top: 0.5rem;
      }
      &:last-child {
        margin-bottom: 0.5rem;
      }

      div {
        width: 100%;
        height: 100%;

        a {
          text-align: start;
          font-family: "Poppins", Arial;
        }
      }

      button {
        width: 100%;
        height: 100%;
        /* background-color: blue; */
        p {
          text-align: start;
          font-family: "Poppins", Arial;
        }
      }
    }
  }
`;
