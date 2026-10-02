import React from "react";

function Networking({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>NETWORKING</span>

        <h1>Networking Solutions</h1>

        <p>
          Structured networking solutions for offices,
          industries, institutions and commercial
          environments.
        </p>

        <h2>Solutions Include</h2>

        <ul>
          <li>LAN Infrastructure</li>
          <li>WAN Networking</li>
          <li>Wi-Fi Solutions</li>
          <li>Network Rack Setup</li>
          <li>Fiber Optic Networking</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default Networking;