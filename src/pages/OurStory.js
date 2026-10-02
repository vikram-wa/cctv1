import React from "react";

function OurStory() {

  const story = [
    ["1989", "JAY ELECTRONICS started its journey."],
    ["Expansion", "Expanded into electronic security systems."],
    ["CCTV", "Started providing CCTV surveillance solutions."],
    ["Networking", "Expanded into networking infrastructure."],
    ["Technology", "Added AV, LED, fire and solar solutions."],
    ["Today", "Providing integrated technology solutions."]
  ];

  return (
    <section className="page">

      <div className="section-heading">
        <span>OUR JOURNEY</span>
        <h1>Our Story</h1>
      </div>

      <div className="timeline">

        {story.map((item, index) => (

          <div key={index}>

            <strong>{item[0]}</strong>

            <p>{item[1]}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default OurStory;