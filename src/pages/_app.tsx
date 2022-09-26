import Head from "next/head";
import { GlobalStyle } from "../styles/global.styles";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { debounce } from "@mui/material";
import { saveState } from "../utils/save";
function MyApp({ Component, pageProps }) {
  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
