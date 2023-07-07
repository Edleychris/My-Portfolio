import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeCircle, BiUser, BiBookHeart } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import nav from "./nav.module.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("/");
  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav className={nav.navControl}>
      <Link
        to="/"
        onClick={() => handleNavClick("/")}
        className={activeNav === "/" ? nav.active : ""}
      >
        <BiHomeCircle />
      </Link>
      <Link
        to="/about"
        onClick={() => handleNavClick("/about")}
        className={activeNav === "/about" ? nav.active : ""}
      >
        <BiUser />
      </Link>
      <Link
        to="/skills"
        onClick={() => handleNavClick("/skills")}
        className={activeNav === "/skills" ? nav.active : ""}
      >
        <BiBookHeart />
      </Link>
      <Link
        to="/projects"
        onClick={() => handleNavClick("/projects")}
        className={activeNav === "/projects" ? nav.active : ""}
      >
        <GoProject />
      </Link>
      <Link
        to="/contact"
        onClick={() => handleNavClick("/contact")}
        className={activeNav === "/contact" ? nav.active : ""}
      >
        <MdOutlineContactMail />
      </Link>
    </nav>
  );
}

export default Nav;
