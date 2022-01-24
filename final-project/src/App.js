import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./Pages/CreateForm";
import SuccessfulPage from "./Pages/SuccessfulPage";
import Welcome from "./Pages/Welcome";
import "./App.css";
import SearchFormPage from "./Pages/SearchFormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/CreateForm" element={<CreateForm />} />
        <Route path="/SuccessfulPage" element={<SuccessfulPage />} />
        <Route path="/SearchFormPage" element={<SearchFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
