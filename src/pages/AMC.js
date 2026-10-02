import React from "react";

function AMC({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>SUPPORT & MAINTENANCE</span>

        <h1>Annual Maintenance Contract</h1>

        <p>
          Professional AMC services to keep your
          security and technology systems operating
          reliably.
        </p>

        <ul>
          <li>Preventive Maintenance</li>
          <li>System Health Checks</li>
          <li>Technical Support</li>
          <li>Emergency Service</li>
          <li>Periodic Reporting</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request AMC →
        </button>

      </div>

    </section>
  );
}

export default AMC;