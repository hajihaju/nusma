import "./Navbar.css";
import Logo from "../../assets/logo1.png";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // For scrolling
import { Link, useLocation } from "react-router-dom"; // For navigation to Home & Notes
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation(); // Get current route

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY >= 50);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={Logo} alt="edusity logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>

        {/* Home Link - Works for both Home and Other Pages */}
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
              Home
            </ScrollLink>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>

        {/* Department Details Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("studentDetails")} className="dropbtn">
            Department Details ▼
          </button>
          {dropdown === "studentDetails" && (
            <ul className="dropdown-content">
              <li>
                <a href="https://dkmcollege.ac.in/department-of-computer-science-and-applications/" target="_blank" rel="noopener noreferrer">
                  BSC Computer Science
                </a>
              </li>
              <li>
                <a href="https://dkmcollege.ac.in/department-of-computer-science-and-applications/" target="_blank" rel="noopener noreferrer">
                  BCA
                </a>
              </li>
              <li>
                <a href="https://dkmcollege.ac.in/departmentof-management-studies/" target="_blank" rel="noopener noreferrer">
                  ISM
                </a>
              </li>
              <li>
                <a href="https://dkmcollege.ac.in/department-of-computer-science-and-applications/" target="_blank" rel="noopener noreferrer">
                  AI
                </a>
              </li>
              <li>
                <a href="https://dkmcollege.ac.in/department-of-computer-science-and-applications/" target="_blank" rel="noopener noreferrer">
                  DATA SCIENCE
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Student Material Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("studentMaterial")} className="dropbtn">
            Student Material ▼
          </button>
          {dropdown === "studentMaterial" && (
            <ul className="dropdown-content">
              <li>
                <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
                  Assignments
                </a>
              </li>
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
            </ul>
          )}
        </li>

        {/* Examination Details Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("staffDetails")} className="dropbtn">
            Examination Details ▼
          </button>
          {dropdown === "staffDetails" && (
            <ul className="dropdown-content">
              <li>
                <a href="https://dkmcollege.ac.in/rules-and-regulations/#" target="_blank" rel="noopener noreferrer">
                  COE & Examination System
                </a>
              </li>
              <li>
                <a href="https://dkmcollege.ac.in/rules-and-regulations/" target="_blank" rel="noopener noreferrer">
                  Rules & Regulation
                </a>
              </li>
              <li>
                <a href="http://184.95.32.186/DKMHallTicket/Login.aspx" target="_blank" rel="noopener noreferrer">
                  Results
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Contact Link */}
        <li>
          <ScrollLink to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact
          </ScrollLink>
        </li>
      </ul>

      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
