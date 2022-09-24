import axios from "axios";
import { RepoData } from "../../../types/repo";
import { github } from "./githubApi";
export async function getRepoByNameService(user: string, name: string) {
  try {
    const RESPONSE = await github.get(`repos/${user}/${name}`);

    return {
      worked: true,
      data: RESPONSE.data as RepoData,
    };
  } catch (e) {
    return {
      worked: false,
      data: null,
    };
  }
}

export async function getAllRepos(user: string) {
  try {
    const RESPONSE = await github.get(`users/${user}/repos`);

    return {
      worked: true,
      data: RESPONSE.data as RepoData[],
    };
  } catch (e) {
    return {
      worked: false,
      data: null,
    };
  }
}
