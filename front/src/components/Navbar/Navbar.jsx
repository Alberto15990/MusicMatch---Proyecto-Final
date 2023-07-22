import { Link, useRoute } from "wouter";
import "./Navbar.css";

const Customlink = ({ href, children }) => {
  const [isActive] = useRoute(href); //isActive para cambiar el color o estado de la pagina que este activa (posible mejora)

  return (
    <Link {...{ href }}>
      <a {...{ href }}>{children}</a>
    </Link>
  );
};

function Navbar() {
  return (
    <nav className="nav">
      <Customlink href="/login">Login</Customlink>
      <Customlink href="/register">Register</Customlink>
      <Customlink href="/start">StartPlay</Customlink>
    </nav>
  );
}

export default Navbar;
