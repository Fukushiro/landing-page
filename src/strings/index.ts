import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, store } from "../store/store";
import { English } from "./english";
import { Portuguese } from "./portuguese";
console.log(store.getState().language);

// const c = store.getState().language.currentLanguage;

// export const strings = c === "pt" ? Portuguese : English;

export function useLanguage() {
  const [strings, setStrings] = useState(Portuguese);
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  useEffect(() => {
    setStrings(language === "pt" ? Portuguese : English);
  }, [language]);

  return { strings };
}
