import React from "react";

function CoreValues() {

  const values = [
    "Integrity",
    "Innovation",
    "Quality",
    "Commitment",
    "Customer First",
    "Continuous Improvement",
    "Safety",
    "Teamwork"
  ];

  return (
    <section className="page">

      <div className="section-heading">
        <span>OUR PRINCIPLES</span>
        <h1>Core Values</h1>
      </div>

      <div className="value-grid">

        {values.map((value, index) => (

          <div key={index}>
            <span>✓</span>
            {value}
          </div>

        ))}

      </div>

    </section>
  );
}

export default CoreValues;