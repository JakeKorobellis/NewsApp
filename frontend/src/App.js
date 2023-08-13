import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ConetentHome from "./components/content-home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/content" element={<ConetentHome />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
