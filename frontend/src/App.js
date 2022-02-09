import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import A from "./a";

function App() {
  return (
<BrowserRouter> 
<div> 
  <Routes> 
    <Route path="/" element={<A />} /> 
  </Routes> 
</div> 
</BrowserRouter>
  );
}

export default App;