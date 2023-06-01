import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} alt="SheCodesc logo" className="logo img-fluid" />
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset" />
      </main>
      <footer>Coded by Andrea Jovicic</footer>
    </div>
  );
}

export default App;
