import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontpageRecipes from "./Routers/Recipes/FrontpageRecipes";
import RecipeInfo from "./Routers/Recipes/RecipeInfo";
import { RecipeContext } from "./Components/Recipes/Context";
import FrontpagePokemon from "./Routers/Pokemons/FrontpagePokemon";
import Movies from "./Routers/Movies/Movies";
import MovieInfo from "./Routers/Movies/MovieInfo";
import RecipesByCategory from "./Routers/Recipes/RecipesByCategory";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <RecipeContext>
        <FrontpageRecipes />
      </RecipeContext>
    ),
  },
  {
    path: "/Recipe/:MealId",
    element: (
      <RecipeContext>
        <RecipeInfo />
      </RecipeContext>
    ),
  },
  {
    path: "/Category/:strCategory",
    element: (
      <RecipeContext>
        <RecipesByCategory />
      </RecipeContext>
    ),
  },

  {
    path: "/Pokemons",
    element: <FrontpagePokemon />,
  },
  {
    path: "/Movies",
    element: <Movies />,
  },
  {
    path: "/Movies/:MovieId",
    element: <MovieInfo />,
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
