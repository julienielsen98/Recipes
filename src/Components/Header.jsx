import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="link">
          Movies
        </Link>

        <Link to="/Pokemon" className="link">
          Pokemon
        </Link>
      </nav>
    </header>
  );
}
