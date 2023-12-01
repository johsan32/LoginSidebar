import React from "react";
import Header from "./components/Header";
import Content from "./pages/Content";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./pages/SecondPage";
import MenuListPage from "./pages/MenuListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Content />} />
          <Route path="/undefined" element={<Content />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/listChild" element={<MenuListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
