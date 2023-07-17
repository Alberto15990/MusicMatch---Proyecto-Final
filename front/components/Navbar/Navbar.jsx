import "./Navbar.css"

const links = ["Login" , "Register" , "Start Play"]

function Navbar() {
  return (
    <ul className="nav">
      {links.map((link,index) => (
    <li key={index}>{link}</li>
    ))}
    </ul>
  )
}

export default Navbar;