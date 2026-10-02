import React from "react";

function CCTV({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>SECURITY SOLUTION</span>

        <h1>CCTV Surveillance</h1>

        <p>
          Professional CCTV surveillance solutions
          for offices, factories, hospitals, schools,
          commercial buildings and other premises.
        </p>

        <h2>Our Process</h2>

        <div className="process">
          <span>Survey</span>
          <span>Design</span>
          <span>Proposal</span>
          <span>Installation</span>
          <span>Testing</span>
          <span>Training</span>
          <span>AMC</span>
        </div>

        <h2>Benefits</h2>

        <ul>
          <li>24×7 surveillance</li>
          <li>Remote monitoring</li>
          <li>Improved security</li>
          <li>Evidence recording</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request CCTV Quote →
        </button>

      </div>

    </section>
  );
}

export default CCTV;