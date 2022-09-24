import { Header } from "../components/Header";
import * as Styles from "../styles/projects.styles";
import * as Global from "../styles/global.styles";
import Head from "next/head";
export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio - projects</title>
      </Head>
      <Styles.Container>
        <Global.Content>
          <Header />
        </Global.Content>
      </Styles.Container>
    </>
  );
}
