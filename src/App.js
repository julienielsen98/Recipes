import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontpage from "./Routers/Categories/Frontpage";
import RecipeInfo from "./Routers/Categories/RecipeInfo";
import RecipesByCategory from "./Routers/Categories/RecipesByCategory";
import RecipesByIngredient from "./Routers/Categories/RecipesByIngredient";
import RecipesByAreas from "./Routers/Categories/RecipesByAreas";
import Search from "./Routers/Search/Search";
import RandomRecipe from "./Routers/RandomRecipe/RandomRecipe";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Frontpage />,
  },
  {
    path: "/Recipe/:MealId",
    element: <RecipeInfo />,
  },
  {
    path: "/Category/:strCategory",
    element: <RecipesByCategory />,
  },

  {
    path: "/Ingredient/:strIngredient",
    element: <RecipesByIngredient />,
  },
  {
    path: "/Areas/:strArea",
    element: <RecipesByAreas />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path: "/RandomRecipe",
    element: <RandomRecipe />,
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
