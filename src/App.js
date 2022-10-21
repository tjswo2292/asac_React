import "./App.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MainPage from "./Components/pages/MainPage";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body, div, span, button, h1, h2, h3, h4, a, img, ol, ul, li, label,
  section {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  img {
    display: inline-block;
    width: inherit;
    height: inherit;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
