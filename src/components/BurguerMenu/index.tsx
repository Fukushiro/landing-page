import { useState } from "react";
import * as Styles from "./styles";
import Hamburger from "hamburger-react";
import { Touchable } from "../Touchable";
export interface BurguerMenuAction {
  title: string;
  action: () => void;
  targetRoute: string;
}

interface BurguerMenuProps {
  itens: BurguerMenuAction[];
}

export function BurguerMenu(props: BurguerMenuProps) {
  // useStates
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Styles.Container>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <Styles.Content>
          <ul>
            {props.itens.map((value, index) => (
              <li key={index}>
                <Touchable onClick={value.action}>
                  <p>{value.title}</p>
                </Touchable>
              </li>
            ))}
          </ul>
        </Styles.Content>
      )}
    </Styles.Container>
  );
}
