import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  /* background-color: blue; */
`;

export const Content = styled.div`
  position: absolute;
  right: 0;
  background-color: black;
  width: 13rem;
  ul {
    list-style: none;
    li {
      /* background-color: red; */
      padding: 0.5rem 1rem 0.5rem 1rem;
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
