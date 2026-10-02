import React from "react";

function Solutions({ navigate }) {

  const services = [
    ["📹", "CCTV Surveillance", "cctv"],
    ["🌐", "Networking Solutions", "networking"],
    ["🔐", "Access Control", "access"],
    ["🚪", "Video Door Phones", "doorphone"],
    ["🔥", "Fire Alarm Systems", "fire"],
    ["☎️", "EPABX & Intercom", "epabx"],
    ["🎥", "Audio Visual Solutions", "av"],
    ["📺", "LED Display Solutions", "led"],
    ["☀️", "Solar Security Solutions", "solar"],
    ["🛠️", "Annual Maintenance Contract", "amc"]
  ];

  return (
    <section className="page">

      <div className="section-heading">

        <span>OUR SOLUTIONS</span>

        <h1>
          Security & Technology Solutions
        </h1>

        <p>
          Complete solutions designed according to
          your business and security requirements.
        </p>

      </div>

      <div className="solution-grid">

        {services.map((service, index) => (

          <div
            className="solution-card"
            key={index}
          >

            <div className="service-icon">
              {service[0]}
            </div>

            <h2>{service[1]}</h2>

            <p>
              Professional {service[1]} solutions
              for businesses and organizations.
            </p>

            <button
              onClick={() =>
                navigate(service[2])
              }
            >
              Explore Solution →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Solutions;