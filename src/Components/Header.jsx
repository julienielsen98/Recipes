import { Link } from "react-router-dom";
import React, { useContext } from "react";

import "../styles/navbar.css";
import { context } from "./Context";

export default function Header() {
  const { fetchRandomRecipe } = useContext(context);
  return (
    <header>
      <nav>
        <Link to="/" className="link">
          Categories
        </Link>
        <Link to="/RandomRecipe" className="link" onClick={fetchRandomRecipe}>
          Random Recipe
        </Link>

        <Link to="/Search" className="link">
          Search
        </Link>
      </nav>
    </header>
  );
}
