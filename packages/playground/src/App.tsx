// React Imports
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component Imports
import { Navbar } from "./components";
import TestPage from "./pages/TestPage";

// Styling, Images, and Colors
import "./App.css";
import HEX_CODES from "../../../colors/valColorLibrary";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const pages = [
    {
      title: "Home",
      url: "/",
      component: <></>,
    },
    {
      title: "Shapes",
      url: "/shapes",
      component: (
        <div>
          <FontAwesomeIcon icon={faFeatherAlt} />
        </div>
      ),
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
