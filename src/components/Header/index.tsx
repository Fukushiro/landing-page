import * as Styles from "./styles";
import Hamburger from "hamburger-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { smMax } from "../../utils/screenSize";
import { BurguerMenu, BurguerMenuAction } from "../BurguerMenu";
import { Touchable } from "../Touchable";
import Router from "next/router";
import Link from "next/link";

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
      targetRoute: "/",
    },
    { title: "About", action: () => {}, targetRoute: "/" },
    {
      title: "Projects",
      action: () => {
        Router.push("/projects");
      },
      targetRoute: "/projects",
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
                {/* <Touchable onClick={value.action}> */}
                <Link href={value.targetRoute}>
                  <a href="">{value.title}</a>
                </Link>
                {/* </Touchable> */}
              </li>
            ))}
          </ul>
        </Styles.MenuList>
      )}
    </Styles.Container>
  );
}
