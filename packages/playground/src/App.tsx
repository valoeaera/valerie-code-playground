// React Imports
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component Imports
import { Navbar } from "./components";

// Styling, Images, and Colors
import "./App.css";
import HEX_CODES from "../../../colors/valColorLibrary";

const App = () => {
  const TestPage = lazy(() => import("./pages/TestPage"));

  const pages = [
    {
      title: "Home",
      url: "/",
      component: <></>,
    },
    {
      title: "Shapes",
      url: "/shapes",
      component: <TestPage />,
    },
  ];

  return (
    <BrowserRouter>
      <Navbar pages={pages} />
      <Suspense>
        <Routes>
          {pages.map(
            (page: { title: string; url: string; component: JSX.Element }) => {
              return (
                <Route
                  key={page.title}
                  path={page.url}
                  element={page.component}
                />
              );
            }
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
