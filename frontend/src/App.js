import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ConetentHome from "./components/content-home";
import Test from "./components/test";
import Login from "./components/login";
import Split from "./components/split";
import Search from "./components/search";
import Active from "./components/active";
import Dividen from "./components/dividen";
import MandA from "./components/mergers";
import StockSplits from "./components/stocksplits";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/content" element={<ConetentHome />}></Route>
            <Route path="/content/split" element={<Split />} />
            <Route path="/content/search" element={<Search />} />
            <Route path="/content/active" element={<Active />} />
            <Route path="/content/dividen" element={<Dividen />} />
            <Route path="/content/MandA" element={<MandA />} />
            <Route path="/content/StockSplits" element={<StockSplits />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
