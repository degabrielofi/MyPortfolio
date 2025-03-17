import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Details from "pages/Details";
import ReactDOM from "react-dom/client";
import "./global.css";
import "./Mode.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/certificates" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
