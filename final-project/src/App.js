import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./Pages/CreateFormPage";
import SuccessfulPage from "./Pages/SuccessfulPage";
import Welcome from "./Pages/Welcome";
import SearchFormPage from "./Pages/SearchFormPage";
import AdminPage from "./Pages/AdminPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/CreateForm" element={<CreateForm />} />
        <Route path="/SuccessfulPage" element={<SuccessfulPage />} />
        <Route path="/SearchFormPage" element={<SearchFormPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
