import { useState } from "react";
import * as Styles from "./styles";
import Hamburger from "hamburger-react";
import { Touchable } from "../Touchable";
import Link from "next/link";
export interface BurguerMenuAction {
  title: string;
  action: () => void;
  targetRoute: string;
  prefetch?: boolean;
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
                <div>
                  <Link href={value.targetRoute}>
                    <a href="">{value.title}</a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Styles.Content>
      )}
    </Styles.Container>
  );
}
