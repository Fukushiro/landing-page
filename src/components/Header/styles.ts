import styled from "styled-components";
import { flavor } from "../../flavors";
import { mdMediaMin } from "../../utils/screenSize";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  @media (${mdMediaMin}) {
    /* width: 700px; */
  }
`;

export const NameTitle = styled.p`
  font-family: "Poppins", Arial;
  color: #ff4a57;
  font-weight: 900;
  font-size: ${flavor.font.fontSize.lg};
`;

export const MenuList = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    li {
      p {
        font-family: "Poppins", Arial;
      }
      a {
        color: white;
        text-decoration: none;
        font-family: "Poppins", Arial;
      }
    }
  }
`;
