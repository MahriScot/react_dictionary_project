import logo_long_no_name from "./logo_long_no_name.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo_long_no_name}
            className="img-fluid App-logo"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <small>
          This project is coded by Mahri Stewart and is open sourced on GitHub
          and hosted on Netlify
        </small>
      </footer>
    </div>
  );
}
