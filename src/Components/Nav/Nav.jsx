import React, { useState } from "react";
import { BiHomeCircle, BiUser, BiBookHeart } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import nav from "./nav.module.css";



 function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav className={nav.navControl}>
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
        className={activeNav === "#home" ? nav.active : ""}
      >
        <BiHomeCircle/>
      </a>

      <a
        href="#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? nav.active : ""}
      >
        <BiUser />
      </a>

      <a
        href="#skill"
        onClick={() => handleNavClick("#skill")}
        className={activeNav === "#skill" ? nav.active : ""}
      >
        <BiBookHeart />
      </a>

      <a
        href="#project"
        onClick={() => handleNavClick("#project")}
        className={activeNav === "#project" ? nav.active : ""}
      >
        <GoProject />
      </a>

      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? nav.active : ""}
      >
        <MdOutlineContactMail />
      </a>
    </nav>
  );
};
export default Nav