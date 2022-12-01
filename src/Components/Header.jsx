import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="link">
          Recipes
        </Link>

        <Link to="/Pokemons" className="link">
          Pokemons
        </Link>

        <Link to="/Movies" className="link">
          Movies
        </Link>
      </nav>
    </header>
  );
}
