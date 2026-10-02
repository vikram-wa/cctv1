import React from "react";

function Footer({ navigate }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>📹 JEPL</h2>

          <p>
            JAY ELECTRONICS PRIVATE LIMITED
          </p>

          <p>
            Securing Businesses. Empowering
            Connectivity. Delivering Excellence
            Since 1989.
          </p>

        </div>

        <div>
          <h3>Quick Links</h3>

          <button onClick={() => navigate("home")}>
            Home
          </button>

          <button onClick={() => navigate("about")}>
            About Us
          </button>

          <button onClick={() => navigate("solutions")}>
            Solutions
          </button>

          <button onClick={() => navigate("blog")}>
            Blog
          </button>

          <button onClick={() => navigate("contact")}>
            Contact
          </button>
        </div>

        <div>
          <h3>Services</h3>

          <button onClick={() => navigate("cctv")}>
            CCTV Surveillance
          </button>

          <button onClick={() => navigate("networking")}>
            Networking
          </button>

          <button onClick={() => navigate("access")}>
            Access Control
          </button>

          <button onClick={() => navigate("fire")}>
            Fire Alarm
          </button>

          <button onClick={() => navigate("amc")}>
            AMC Services
          </button>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Maharashtra, India</p>
          <p>📞 +91 9422407175</p>
          <p>✉️ info@jayelectronics.com</p>
          <p>💬 WhatsApp</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 JAY ELECTRONICS PRIVATE LIMITED.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;