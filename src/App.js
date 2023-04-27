import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Update from "./Components/Update/Update";

function App() {
  return (
     <Router>
         <Routes>
             <Route exact path="/"  element={<Home />} />
             <Route exact path="/Update-message"  element={<Update />} />
         </Routes>
     </Router>
  );
}

export default App;
