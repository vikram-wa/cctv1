import React from "react";

function AudioVisual({ navigate }) {
  return (
    <section className="page">

      <div className="service-detail">

        <span>AUDIO VISUAL</span>

        <h1>Audio Visual Solutions</h1>

        <p>
          Professional AV systems for conference
          rooms, meeting rooms, classrooms and
          corporate environments.
        </p>

        <ul>
          <li>Conference Room Systems</li>
          <li>Projectors</li>
          <li>Displays</li>
          <li>Sound Systems</li>
          <li>Video Conferencing</li>
        </ul>

        <button onClick={() => navigate("contact")}>
          Request Quote →
        </button>

      </div>

    </section>
  );
}

export default AudioVisual;