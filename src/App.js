// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./App.css";






import Navigation from "./navigation";
 import Button from "./Button";
 import Table from "./Table";
 import Home from "./Home";
 import { useState } from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
function App() {

  // const [color, setColor] =useState("blue");

//the first value "color" is our current state.

//the second value, "setColor", is the function that is used to update our state.

//SPA


  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        
          <Route path="/table" element={<Table />} />
          <Route path="/button" element={<Button />} />
          <Route path="/navigation" element={<Navigation />} />
          </Route>
      </Routes>
    </BrowserRouter>

</>
  );
}

export default App;


