import React from "react";

function VideoDoorPhone({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>COMMUNICATION</span>

        <h1>Video Door Phones</h1>

        <p>
          Video door phone systems provide secure
          visitor identification and communication.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Video visitor verification</li>
          <li>Two-way communication</li>
          <li>Secure door access</li>
          <li>Indoor monitoring</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default VideoDoorPhone;