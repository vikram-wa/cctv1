import React from "react";

function FireAlarm({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>FIRE SAFETY</span>

        <h1>Fire Alarm Systems</h1>

        <p>
          Fire detection and alarm solutions designed
          to provide early warning during fire
          emergencies.
        </p>

        <h2>Solutions</h2>

        <ul>
          <li>Smoke Detectors</li>
          <li>Heat Detectors</li>
          <li>Fire Alarm Panels</li>
          <li>Manual Call Points</li>
          <li>Hooter & Sounders</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default FireAlarm;