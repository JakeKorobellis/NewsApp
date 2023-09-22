import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ConetentHome from "./components/content-home";
import Login from "./components/login";
import Split from "./components/split";
import Search from "./components/search";
import Active from "./components/active";
import Dividen from "./components/dividen";
import MandA from "./components/mergers";
import StockSplits from "./components/stocksplits";
import Signup from "./components/signup";
import UserEdit from "./components/profile";
import PasswordEdit from "./components/passwordedit";
import Success from "./components/success";
import Fav from "./components/helperfunctions/favs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Route path="signup" element={<Signup />} />
          <Route path="/useredit" element={<UserEdit />} />
          <Route path="/useredit/password" element={<PasswordEdit />} />
          <Route path="/success" element={<Success />} />
          <Route path="/favs" element={<Fav />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
