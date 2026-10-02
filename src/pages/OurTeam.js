import React from "react";

function OurTeam() {

  const team = [
    ["👨‍💻", "Project Engineers"],
    ["👷", "Site Engineers"],
    ["🛠️", "Service Engineers"],
    ["🎧", "Support Team"],
    ["📋", "Administration"],
    ["💰", "Accounts"],
    ["📦", "Procurement"]
  ];

  return (
    <section className="page">

      <div className="section-heading">
        <span>OUR PEOPLE</span>
        <h1>Our Team</h1>
      </div>

      <div className="team-grid">

        {team.map((member, index) => (

          <div key={index}>

            <span className="team-icon">
              {member[0]}
            </span>

            <h3>{member[1]}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default OurTeam;