import React from "react";

function About({ navigate }) {

  return (
    <section className="page">

      <div className="section-heading">

        <span>ABOUT JEPL</span>

        <h1>Who We Are</h1>

      </div>

      <div className="content-box">

        <h2>
          JAY ELECTRONICS PRIVATE LIMITED
        </h2>

        <p>
          Established in 1989, JAY ELECTRONICS PRIVATE
          LIMITED has evolved into a technology
          integration company providing electronic
          security, networking, communication and
          smart technology solutions.
        </p>

        <p>
          We provide end-to-end solutions backed by
          engineering expertise, professional support
          and long-term customer relationships.
        </p>

      </div>

      <div className="about-menu-grid">

        <button onClick={() => navigate("company")}>
          Company Profile →
        </button>

        <button onClick={() => navigate("story")}>
          Our Story →
        </button>

        <button onClick={() => navigate("vision")}>
          Vision & Mission →
        </button>

        <button onClick={() => navigate("values")}>
          Core Values →
        </button>

        <button onClick={() => navigate("why")}>
          Why Choose JEPL →
        </button>

        <button onClick={() => navigate("leadership")}>
          Leadership →
        </button>

        <button onClick={() => navigate("team")}>
          Our Team →
        </button>

      </div>

    </section>
  );
}

export default About;