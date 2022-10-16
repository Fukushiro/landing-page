const { render, screen, fireEvent } = require("@testing-library/react");
// const userEvent = require("@testing-library/user-event");
// const userEvent = require("@testing-library/user-event");
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";
// import { Header } from '../src/components/Header';
import Home from "../src/pages/index";

import mediaQuery from "css-mediaquery";
import { BurguerMenu } from "../src/components/BurguerMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}
describe("Home", () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
  it("renders Bem vindo", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const text = screen.getByText("Bem vindo");

    expect(text).toBeInTheDocument();
  });

  // it ('render header', () => {
  //     render(<Header  />);

  //     const text = screen.getByText('Bem vindo');

  //     expect(text).toBeInTheDocument();
  // })

  it("dadas", () => {
    const itens = [
      {
        title: "Home",
        action: () => {
          Router.push("/");
        },
        targetRoute: "/",
      },
      // { title: "About", action: () => {}, targetRoute: "/" },
      {
        title: "Projects",
        action: () => {
          Router.push("/projects");
        },
        targetRoute: "/projects",
      },
    ];
    render(
      <Provider store={store}>
        <BurguerMenu itens={itens} />
      </Provider>
    );
  });

  it("should change language", async () => {
    const user = userEvent.setup();
    // language-switch
    const { rerender } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const text = screen.getByText("Bem vindo");

    expect(text).toBeInTheDocument();

    const sw = screen.getByTestId("language-switch");

    // fireEvent(sw, new MouseEvent("click"), { bubbles: true, cancelable: true });
    // fireEvent(sw);
    await user.click(sw);
    rerender(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const text2 = screen.getByText("WELCOME!");

    expect(text2).toBeInTheDocument();
  });

  it("renders Bem vindo 2", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const text = screen.getByText("Bem vindo");

    expect(text).toBeInTheDocument();
  });
});
