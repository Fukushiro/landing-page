import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import * as Styles from "../styles/home.styles";
export default function Home() {
  return (
    <Styles.Container>
      <Header />
    </Styles.Container>
  );
}
