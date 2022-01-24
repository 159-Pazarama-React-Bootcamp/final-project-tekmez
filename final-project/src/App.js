import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./Pages/CreateForm";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/CreateForm" element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
