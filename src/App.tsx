import { useEffect } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { router } from "./router/router";
import { useAppCashedDispatch } from "./hooks/store";

function App() {
  const { setupFavoritesFromStore } = useAppCashedDispatch();

  useEffect(() => {
    setupFavoritesFromStore();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {router.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
