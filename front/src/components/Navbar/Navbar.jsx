import { Link, useRoute } from "wouter";
import "./Navbar.css";

const Customlink = ({ href, children }) => {
  const [isActive] = useRoute(href); 

  return (
    <Link {...{ href }}>
      <a className="button" {...{ href }}>{children}</a>
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
