import React from "react";
import { Container } from "./styles";

interface TouchableProps {
  children: any;
  onClick: () => void;
}
export function Touchable(props: TouchableProps) {
  return <Container onClick={props.onClick}>{props.children}</Container>;
}
