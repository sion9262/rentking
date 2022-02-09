// import React from "react";
// import SignUpForm from "./SignUpForm";
// import NavBar from "./NavBar";

// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/sign" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>  
    </div>
  </BrowserRouter>  

  );
}

export default App;
