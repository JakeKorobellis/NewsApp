import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <div class="header">
            <div className="fifityvw ">
              <div className="header-title-format">
                <div className="title-font-large">
                  <span className="neon-blue">N</span>ews
                  <span className="neon-blue">R</span>oom
                </div>
                <span className="header-font-small">
                  The latest in <span className="neon-blue">Equities</span> &{" "}
                  <span className="neon-blue">Crypto</span>{" "}
                </span>
              </div>
            </div>
            <div className="fifityvw"> yo</div>
          </div>
          <div class="sidebar"></div>
          <div class="data">
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
