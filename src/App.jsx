import React, { createContext } from "react";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Search from "./pages/Search";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./styles/navbar.css";
import "./App.css";

import NotFound from "./pages/NotFound";
import history from "./pages/history";
import { useLocalStorage } from "usehooks-ts";
import Aside from "./components/Aside";
import SingleMovie from "./components/SingleMovie";
import SingleShow from "./components/SingleShow";

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
          <Aside toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="search"
          element={<Search location={location} key={location.pathname} />}
        />
        <Route path="movies" element={<Movies />} />
        <Route path="tv-shows" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie/:id" element={<SingleMovie category={"movie"} />} />
        <Route path="/tv/:id" element={<SingleShow category={"tv"} />} />
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
