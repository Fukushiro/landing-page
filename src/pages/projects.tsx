import { Header } from "../components/Header";
import * as Styles from "../styles/projects.styles";
import * as Global from "../styles/global.styles";
import Head from "next/head";
import { useEffect } from "react";
import { getRepoByNameService } from "../components/services/github/repo";
import { GetStaticProps } from "next";
import { RepoData } from "../types/repo";
interface Props {
  repos: RepoData[];
}
export default function Projects(props: Props) {
  useEffect(() => {
    async function actions() {}
    actions();
  }, []);
  console.log(props.repos);

  return (
    <>
      <Head>
        <title>Portfolio - projects</title>
      </Head>
      <Styles.Container>
        <Global.Content>
          <Header />

          {props.repos.map((value) => {
            return <p key={value.id}>{value.name}</p>;
          })}
        </Global.Content>
      </Styles.Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const repos: RepoData[] = [];
  const wantedRepos: string[] = ["landing-page"];

  for (const rep in wantedRepos) {
    const { data, worked } = await getRepoByNameService(
      "Fukushiro",
      wantedRepos[rep]
    );

    if (worked) {
      // console.log(data);
      repos.push(data);
    }
  }

  return {
    props: {
      repos: repos,
    },
    revalidate: 60 * 60 * 4, //4 horas
  };
};
