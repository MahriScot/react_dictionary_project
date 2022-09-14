import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="app_header">
        <span>
          <img src="images/dictionary.png" alt="dictionary" width="45"></img>
        </span>
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        <main>
          <Dictionary className="Dictionary" defaultKeyword="welcome" />
        </main>
      </div>
      <footer>
        <img src="images/terrain.png" alt="my_logo" width="20"></img>This
        project is coded by{" "}
        <a
          href="https://steady-youtiao-11dde2.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="me"
        >
          Mahri Stewart
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/MahriScot/react_dictionary_project"
          target="_blank"
          rel="noreferrer"
          className="github_and_netlify"
        >
          open sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://coruscating-starburst-e7d595.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
