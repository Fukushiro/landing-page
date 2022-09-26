import { RepoData } from "../../types/repo";
import * as Styles from "./styles";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SiTypescript } from "react-icons/si";
import { AiFillFileUnknown } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { Touchable } from "../Touchable";
import { IoLogoJavascript } from "react-icons/io";
import Link from "next/link";
import { IconType } from "react-icons";
interface Props {
  repo: RepoData;
}
export function RepoCard({ repo }: Props) {
  const Icons = {
    TypeScript: SiTypescript,
    Java: FaJava,
    JavaScript: IoLogoJavascript,
    unknown: AiFillFileUnknown,
  };

  const CurrentIcon =
    repo.language in Icons ? Icons[repo.language] : Icons.unknown;

  return (
    <Link href={repo.html_url}>
      <a target={"_blank"} style={{ color: "white", textDecoration: "none" }}>
        <Styles.Container>
          <div>
            <CurrentIcon size={20} color="white" />
          </div>
          <p>{repo.name}</p>
          <p>Created at: {format(new Date(), "yyyy-MM-dd")}</p>
        </Styles.Container>
      </a>
    </Link>
  );
}
