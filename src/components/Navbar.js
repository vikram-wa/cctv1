
import React, { useState } from "react";
import logoImage from "../assets/jepl-logo.svg";

function Navbar({ navigate, activePage }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (newPage) => {
    setAboutOpen(false);
    setSolutionOpen(false);
    setMobileOpen(false);
    navigate(newPage);
  };

  return (
    <nav className="navbar">

      {/* ================= ELECTRONIC LOGO ================= */}

      <div
        className="logo"
        onClick={() => handleNavigation("home")}
      >
        <img
          src={logoImage}
          alt="JEPL logo"
          className="logo-image"
        />

        <div className="electronic-logo">

          {/* Circuit Icon */}
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* Main Chip */}
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
            />

            {/* Chip Center */}
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
            />

            {/* Circuit Lines */}

            <line
              x1="25"
              y1="35"
              x2="10"
              y2="35"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="25"
              y1="50"
              x2="10"
              y2="50"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="25"
              y1="65"
              x2="10"
              y2="65"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="75"
              y1="35"
              x2="90"
              y2="35"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="75"
              y1="50"
              x2="90"
              y2="50"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="75"
              y1="65"
              x2="90"
              y2="65"
              stroke="currentColor"
              strokeWidth="5"
            />

            {/* Top Pins */}

            <line
              x1="35"
              y1="25"
              x2="35"
              y2="10"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="50"
              y1="25"
              x2="50"
              y2="10"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="65"
              y1="25"
              x2="65"
              y2="10"
              stroke="currentColor"
              strokeWidth="5"
            />

            {/* Bottom Pins */}

            <line
              x1="35"
              y1="75"
              x2="35"
              y2="90"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="50"
              y1="75"
              x2="50"
              y2="90"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="65"
              y1="75"
              x2="65"
              y2="90"
              stroke="currentColor"
              strokeWidth="5"
            />

            {/* Electronic Nodes */}

            <circle
              cx="10"
              cy="35"
              r="4"
              fill="currentColor"
            />

            <circle
              cx="10"
              cy="50"
              r="4"
              fill="currentColor"
            />

            <circle
              cx="10"
              cy="65"
              r="4"
              fill="currentColor"
            />

            <circle
              cx="90"
              cy="35"
              r="4"
              fill="currentColor"
            />

            <circle
              cx="90"
              cy="50"
              r="4"
              fill="currentColor"
            />

            <circle
              cx="90"
              cy="65"
              r="4"
              fill="currentColor"
            />

          </svg>

        </div>

        {/* Logo Text */}

        <div className="logo-text">
          <strong>JEPL</strong>
          <small>JAY ELECTRONICS</small>
        </div>

      </div>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
        onClick={() => setMobileOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ================= NAVIGATION ================= */}

      <div
        className={`nav-links${mobileOpen ? " mobile-open" : ""}`}
        id="primary-navigation"
      >

        {/* HOME */}

        <button
          className={activePage === "home" ? "active" : ""}
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>

        {/* ================= ABOUT ================= */}

        <div className="dropdown">

          <button
            className={
              [
                "about",
                "company",
                "story",
                "vision",
                "values",
                "why",
                "leadership",
                "team"
              ].includes(activePage)
                ? "active"
                : ""
            }
            onClick={() =>
              setAboutOpen((isOpen) => {
                setSolutionOpen(false);
                return !isOpen;
              })
            }
          >
            About Us ▾
          </button>

          {aboutOpen && (
            <div className="dropdown-menu">

              <button
                className={activePage === "about" ? "active" : ""}
                onClick={() => handleNavigation("about")}
              >
                About Us
              </button>

              <button
                className={activePage === "company" ? "active" : ""}
                onClick={() => handleNavigation("company")}
              >
                Company Profile
              </button>

              <button
                className={activePage === "story" ? "active" : ""}
                onClick={() => handleNavigation("story")}
              >
                Our Story
              </button>

              <button
                className={activePage === "vision" ? "active" : ""}
                onClick={() => handleNavigation("vision")}
              >
                Vision & Mission
              </button>

              <button
                className={activePage === "values" ? "active" : ""}
                onClick={() => handleNavigation("values")}
              >
                Core Values
              </button>

              <button
                className={activePage === "why" ? "active" : ""}
                onClick={() => handleNavigation("why")}
              >
                Why Choose JEPL
              </button>

              <button
                className={activePage === "leadership" ? "active" : ""}
                onClick={() => handleNavigation("leadership")}
              >
                Leadership
              </button>

              <button
                className={activePage === "team" ? "active" : ""}
                onClick={() => handleNavigation("team")}
              >
                Our Team
              </button>

            </div>
          )}

        </div>

        {/* ================= SOLUTIONS ================= */}

        <div className="dropdown">

          <button
            className={
              [
                "solutions",
                "cctv",
                "networking",
                "access",
                "doorphone",
                "fire",
                "epabx",
                "av",
                "led",
                "solar",
                "amc"
              ].includes(activePage)
                ? "active"
                : ""
            }
            onClick={() =>
              setSolutionOpen((isOpen) => {
                setAboutOpen(false);
                return !isOpen;
              })
            }
          >
            Solutions ▾
          </button>

          {solutionOpen && (
            <div className="dropdown-menu">

              <button
                className={activePage === "solutions" ? "active" : ""}
                onClick={() => handleNavigation("solutions")}
              >
                All Solutions
              </button>

              <button
                className={activePage === "cctv" ? "active" : ""}
                onClick={() => handleNavigation("cctv")}
              >
                CCTV Surveillance
              </button>

              <button
                className={activePage === "networking" ? "active" : ""}
                onClick={() => handleNavigation("networking")}
              >
                Networking Solutions
              </button>

              <button
                className={activePage === "access" ? "active" : ""}
                onClick={() => handleNavigation("access")}
              >
                Access Control
              </button>

              <button
                className={activePage === "doorphone" ? "active" : ""}
                onClick={() => handleNavigation("doorphone")}
              >
                Video Door Phones
              </button>

              <button
                className={activePage === "fire" ? "active" : ""}
                onClick={() => handleNavigation("fire")}
              >
                Fire Alarm Systems
              </button>

              <button
                className={activePage === "epabx" ? "active" : ""}
                onClick={() => handleNavigation("epabx")}
              >
                EPABX & Intercom
              </button>

              <button
                className={activePage === "av" ? "active" : ""}
                onClick={() => handleNavigation("av")}
              >
                Audio Visual Solutions
              </button>

              <button
                className={activePage === "led" ? "active" : ""}
                onClick={() => handleNavigation("led")}
              >
                LED Display Solutions
              </button>

              <button
                className={activePage === "solar" ? "active" : ""}
                onClick={() => handleNavigation("solar")}
              >
                Solar Security Solutions
              </button>

              <button
                className={activePage === "amc" ? "active" : ""}
                onClick={() => handleNavigation("amc")}
              >
                Annual Maintenance Contract
              </button>

            </div>
          )}

        </div>

        {/* BLOG */}

        <button
          className={activePage === "blog" ? "active" : ""}
          onClick={() => handleNavigation("blog")}
        >
          Blog
        </button>

        {/* CONTACT */}

        <button
          className={activePage === "contact" ? "active" : ""}
          onClick={() => handleNavigation("contact")}
        >
          Contact
        </button>

        <button
          className="admin-button"
          onClick={() => handleNavigation("admin")}
          aria-label="Admin"
          title="Admin"
        >
          <span aria-hidden="true">🔐</span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

