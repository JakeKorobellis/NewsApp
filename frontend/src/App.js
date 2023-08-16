import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ConetentHome from "./components/content-home";
import Test from "./components/test";
import Login from "./components/login";
import Split from "./components/split";

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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
