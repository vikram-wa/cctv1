import React from "react";

function AccessControl({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>SECURITY</span>

        <h1>Access Control</h1>

        <p>
          Secure your premises with modern access
          control systems.
        </p>

        <h2>Features</h2>

        <ul>
          <li>Biometric Access</li>
          <li>RFID Cards</li>
          <li>Face Recognition</li>
          <li>Door Controllers</li>
          <li>Attendance Integration</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default AccessControl;