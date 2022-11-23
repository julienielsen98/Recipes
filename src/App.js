import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./Routers/Movies";
import Pokemon from "./Routers/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },

  {
    path: "/Pokemon",
    element: <Pokemon />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
