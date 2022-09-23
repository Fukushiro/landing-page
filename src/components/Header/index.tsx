import * as Styles from "./styles";
import Hamburger from "hamburger-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { smMax } from "../../utils/screenSize";
import { BurguerMenu, BurguerMenuAction } from "../BurguerMenu";
import { Touchable } from "../Touchable";
import Router from "next/router";

export function Header() {
  // media queries
  const isSmall = useMediaQuery(`(max-width: ${smMax}px)`);

  //

  const burguerMenuActions: BurguerMenuAction[] = [
    {
      title: "Home",
      action: () => {
        Router.push("/");
      },
    },
    { title: "About", action: () => {} },
    {
      title: "Service",
      action: () => {
        Router.push("/projects");
      },
    },
  ];
  return (
    <Styles.Container>
      <Styles.NameTitle>João Pedro Fukushiro</Styles.NameTitle>

      {isSmall ? (
        <BurguerMenu itens={burguerMenuActions} />
      ) : (
        <Styles.MenuList>
          <ul>
            {burguerMenuActions.map((value, index) => (
              <li key={index}>
                <Touchable onClick={value.action}>
                  <p>{value.title}</p>
                </Touchable>
              </li>
            ))}
          </ul>
        </Styles.MenuList>
      )}
    </Styles.Container>
  );
}
