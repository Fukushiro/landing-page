import * as Styles from "./styles";
import Hamburger from "hamburger-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { smMax } from "../../utils/screenSize";
import { BurguerMenu, BurguerMenuAction } from "../BurguerMenu";

export function Header() {
  // media queries
  const isSmall = useMediaQuery(`(max-width: ${smMax}px)`);

  //

  const burguerMenuActions: BurguerMenuAction[] = [
    { title: "Home", action: () => {} },
    { title: "About", action: () => {} },
    { title: "Service", action: () => {} },
  ];
  return (
    <Styles.Container>
      <Styles.NameTitle>João Pedro Fukushiro</Styles.NameTitle>

      {isSmall ? (
        <BurguerMenu itens={burguerMenuActions} />
      ) : (
        <div>
          <ul>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
          </ul>
        </div>
      )}
    </Styles.Container>
  );
}
