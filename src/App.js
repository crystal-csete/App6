/** @format */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Supplies from "./components/Supplies";
import Inventory from "./components/Inventory";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/supplies' element={<Supplies />} />
      </Routes>
    </Router>
  );
}

export default App;
