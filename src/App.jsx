import React, { createContext, useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Search from "./pages/Search";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import History from "./pages/history";
import "./styles/navbar.css";
import "./styles/swiper.css";
import "./App.css";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import history from "./pages/history";
import { useLocalStorage } from "usehooks-ts";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useLocalStorage("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Navbar toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />
        }
      >
        <Route index element={<Homepage />} />
        <Route
          path="search"
          element={<Search location={location} key={location.pathname} />}
        />
        <Route path="movies" element={<Movies />} />
        <Route path="tvshows" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <RouterProvider router={router} history={history} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
