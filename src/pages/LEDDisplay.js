import React from "react";

function LEDDisplay({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>DISPLAY TECHNOLOGY</span>

        <h1>LED Display Solutions</h1>

        <p>
          LED display and video wall solutions for
          commercial, corporate and public environments.
        </p>

        <ul>
          <li>LED Video Walls</li>
          <li>Indoor LED Displays</li>
          <li>Outdoor LED Displays</li>
          <li>Digital Signage</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default LEDDisplay;