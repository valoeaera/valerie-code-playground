// React Imports
import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component Imports
import NavigationBar from "./components/NavigationBar";

// Styling Imports
import "./App.css";
import "./index.css";

// Image Imports
import reactLogo from "./assets/react.svg";

function App() {
  const Home = lazy(() => import("./pages/Home"));

  const pages = [{ id: "home", label: "Home", path: "/" }];

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationBar pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
