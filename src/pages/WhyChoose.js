import React from "react";

function WhyChoose() {

  const reasons = [
    "35+ Years of Experience",
    "Qualified Engineers",
    "Turnkey Project Execution",
    "PAN Maharashtra Support",
    "Government Project Experience",
    "Trusted Technology Brands",
    "Customized Solutions",
    "AMC Services",
    "24×7 Emergency Support",
    "Competitive Pricing"
  ];

  return (
    <section className="page">

      <div className="section-heading">
        <span>WHY JEPL</span>
        <h1>Why Choose JEPL?</h1>
      </div>

      <div className="reason-grid">

        {reasons.map((reason, index) => (

          <div key={index}>
            <span>✓</span>
            {reason}
          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;