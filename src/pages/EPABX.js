import React from "react";

function EPABX({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>COMMUNICATION</span>

        <h1>EPABX & Intercom</h1>

        <p>
          Business communication solutions for
          offices, hotels, hospitals and industries.
        </p>

        <ul>
          <li>EPABX Systems</li>
          <li>IP Phones</li>
          <li>Intercom Systems</li>
          <li>Internal Communication</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default EPABX;