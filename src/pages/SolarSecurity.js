import React from "react";

function SolarSecurity({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>SMART SECURITY</span>

        <h1>Solar Security Solutions</h1>

        <p>
          Solar-powered surveillance solutions for
          remote locations and areas without reliable
          power infrastructure.
        </p>

        <ul>
          <li>Solar CCTV</li>
          <li>Solar Power Systems</li>
          <li>Remote Monitoring</li>
          <li>Battery Backup</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default SolarSecurity;