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
                  <span className="neon-blue">N</span>
                  <span className="neon-blue">R</span>
                  <span className="smaller-title">.com</span>
                </div>
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
