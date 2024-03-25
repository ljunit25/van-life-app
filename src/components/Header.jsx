import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <a href="">
            <h1>#vanlife</h1>
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <Link to="/about">
            <li>
              <a href="">About</a>
            </li>
          </Link>
          <li>
            <a href="">Vans</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
