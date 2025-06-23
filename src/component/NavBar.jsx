import { useState } from "react";
import "../style/navbar.css";
import logoImg from "../assets/Group.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="navbar">
      <div className="logo">
  <img src={logoImg} alt="Logo" />
</div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>

      <div className={`links ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="active">Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>

      <div className={`hire ${isMobileMenuOpen ? "open" : ""}`}>
        <button>HIRE ME</button>
      </div>
    </section>
  );
};

export default NavBar;
