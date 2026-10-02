import React, { useEffect, useRef } from "react";

function useAutoSlide(sliderRef) {
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId;
    let pauseUntil = 0;

    const pauseAutoSlide = () => {
      pauseUntil = Date.now() + 5000;
    };

    const updateAutoSlide = () => {
      window.clearInterval(intervalId);
      if (!mobileQuery.matches || reducedMotionQuery.matches) return;

      intervalId = window.setInterval(() => {
        if (document.hidden || slider.matches(":hover") || Date.now() < pauseUntil) return;

        const item = slider.children[0];
        if (!item) return;

        const itemWidth = item.getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(slider).columnGap) || 0;
        const step = itemWidth + gap;
        if (!step) return;

        const maxIndex = Math.max(
          0,
          Math.round((slider.scrollWidth - slider.clientWidth) / step)
        );
        const currentIndex = Math.round(slider.scrollLeft / step);
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;

        slider.scrollTo({ left: nextIndex * step, behavior: "smooth" });
      }, 3500);
    };

    slider.addEventListener("pointerdown", pauseAutoSlide);
    slider.addEventListener("wheel", pauseAutoSlide);
    mobileQuery.addEventListener("change", updateAutoSlide);
    reducedMotionQuery.addEventListener("change", updateAutoSlide);
    updateAutoSlide();

    return () => {
      window.clearInterval(intervalId);
      slider.removeEventListener("pointerdown", pauseAutoSlide);
      slider.removeEventListener("wheel", pauseAutoSlide);
      mobileQuery.removeEventListener("change", updateAutoSlide);
      reducedMotionQuery.removeEventListener("change", updateAutoSlide);
    };
  }, [sliderRef]);
}

function Home({ navigate }) {
  const statsSliderRef = useRef(null);
  const industriesSliderRef = useRef(null);
  const whySliderRef = useRef(null);
  const brandSliderRef = useRef(null);

  useAutoSlide(statsSliderRef);
  useAutoSlide(industriesSliderRef);
  useAutoSlide(whySliderRef);
  useAutoSlide(brandSliderRef);

  const services = [
    {
      icon: "📹",
      title: "CCTV Surveillance",
      text: "Advanced surveillance solutions for complete security.",
      page: "cctv"
    },
    {
      icon: "🌐",
      title: "Networking Infrastructure",
      text: "Reliable networking and connectivity solutions.",
      page: "networking"
    },
    {
      icon: "🔐",
      title: "Access Control",
      text: "Smart access control for secure premises.",
      page: "access"
    },
    {
      icon: "🚪",
      title: "Video Door Phones",
      text: "Secure visitor communication solutions.",
      page: "doorphone"
    },
    {
      icon: "🔥",
      title: "Fire Alarm Systems",
      text: "Reliable fire detection and alarm systems.",
      page: "fire"
    },
    {
      icon: "☎️",
      title: "EPABX & Intercom",
      text: "Professional communication solutions.",
      page: "epabx"
    },
    {
      icon: "🎥",
      title: "Audio Visual Systems",
      text: "Modern audio visual solutions.",
      page: "av"
    },
    {
      icon: "📺",
      title: "LED Display Solutions",
      text: "High-quality LED display solutions.",
      page: "led"
    },
    {
      icon: "☀️",
      title: "Solar Security",
      text: "Solar-powered security surveillance.",
      page: "solar"
    },
    {
      icon: "🛠️",
      title: "AMC Services",
      text: "Annual maintenance and technical support.",
      page: "amc"
    }
  ];

  const industries = [
    "Government",
    "Police",
    "Hospitals",
    "Factories",
    "Schools",
    "Colleges",
    "Banks",
    "Hotels",
    "Warehouses",
    "Retail Stores",
    "Agriculture",
    "Industrial Plants"
  ];

  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            SINCE 1989 • TECHNOLOGY INTEGRATION
          </span>

          <h1>
            Securing Businesses.
            <br />
            Empowering Connectivity.
            <br />
            Delivering Excellence.
          </h1>

          <p>
            JAY ELECTRONICS PRIVATE LIMITED is one of
            Maharashtra’s trusted system integration
            companies specializing in Electronic Security,
            CCTV Surveillance, Networking Infrastructure,
            Audio Visual Systems, Access Control,
            Telecom Solutions and Smart Technology
            Integration.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => navigate("contact")}
            >
              Get Free Site Survey
            </button>

            <button
              className="outline-button"
              onClick={() => navigate("contact")}
            >
              Request Quotation
            </button>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats" ref={statsSliderRef}>

        <div>
          <strong>35+</strong>
          <span>Years Experience</span>
        </div>

        <div>
          <strong>1000+</strong>
          <span>Projects Completed</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Happy Clients</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Government Projects</span>
        </div>

        <div>
          <strong>100+</strong>
          <span>Corporate Customers</span>
        </div>

      </section>

      {/* ABOUT */}

      <section className="home-section">

        <div className="section-heading">

          <span>WHO WE ARE</span>

          <h2>
            Technology Partner You Can Trust
          </h2>

        </div>

        <div className="about-home">

          <div>
            <h3>
              JAY ELECTRONICS PRIVATE LIMITED
            </h3>

            <p>
              For more than three decades, we have been
              delivering technology solutions that help
              businesses, industries, educational
              institutions, hospitals, government
              organizations and residential customers
              improve security, communication and
              operational efficiency.
            </p>

            <p>
              Our experienced engineering team provides
              complete turnkey solutions from consultation
              and design to installation, commissioning,
              training and annual maintenance.
            </p>

            <button
              onClick={() => navigate("about")}
            >
              Discover More →
            </button>
          </div>

          <div className="about-box">
            <div>35+</div>
            <p>Years of Excellence</p>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="home-section light">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Complete Technology Solutions
          </h2>

        </div>

        <div className="service-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button
                onClick={() =>
                  navigate(service.page)
                }
              >
                Read More →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="home-section">

        <div className="section-heading">

          <span>INDUSTRIES WE SERVE</span>

          <h2>
            Solutions Across Multiple Sectors
          </h2>

        </div>

        <div className="industry-grid" ref={industriesSliderRef}>

          {industries.map((item, index) => (

            <div key={index}>
              ✓ {item}
            </div>

          ))}

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="home-section dark-section">

        <div className="section-heading">

          <span>WHY JEPL</span>

          <h2>
            Why Choose JEPL?
          </h2>

        </div>

        <div className="why-grid" ref={whySliderRef}>

          <div>✓ 35+ Years Experience</div>
          <div>✓ Qualified Engineers</div>
          <div>✓ Turnkey Execution</div>
          <div>✓ PAN Maharashtra Support</div>
          <div>✓ Government Experience</div>
          <div>✓ Trusted Brands</div>
          <div>✓ Customized Solutions</div>
          <div>✓ AMC Services</div>
          <div>✓ 24×7 Emergency Support</div>
          <div>✓ Competitive Pricing</div>

        </div>

      </section>

      {/* BRANDS */}

      <section className="home-section">

        <div className="section-heading">

          <span>TECHNOLOGY PARTNERS</span>

          <h2>
            Trusted Brands
          </h2>

        </div>

        <div className="brand-grid" ref={brandSliderRef}>

          <div>CP PLUS</div>
          <div>Dahua</div>
          <div>Hikvision</div>
          <div>TP-Link</div>
          <div>Cisco</div>
          <div>Netgear</div>
          <div>Dell</div>
          <div>Honeywell</div>
          <div>Bosch</div>
          <div>Matrix</div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="home-section light">

        <div className="section-heading">

          <span>CLIENT FEEDBACK</span>

          <h2>
            What Our Customers Say
          </h2>

        </div>

        <div className="testimonial-grid">

          <div>
            <p>
              “Professional team and excellent
              support throughout our project.”
            </p>
            <strong>— Corporate Client</strong>
          </div>

          <div>
            <p>
              “The installation and technical support
              were handled professionally.”
            </p>
            <strong>— Industrial Client</strong>
          </div>

          <div>
            <p>
              “Reliable technology solutions and
              responsive service team.”
            </p>
            <strong>— Institutional Client</strong>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Need a Reliable Technology Partner?
        </h2>

        <p>
          Contact JEPL today for your security and
          technology requirements.
        </p>

        <button
          onClick={() => navigate("contact")}
        >
          Contact JEPL →
        </button>

      </section>

      {/* FLOATING BUTTONS */}

      <div className="floating-buttons">

        <button
          className="whatsapp"
          onClick={() =>
            window.open(
              "https://wa.me/9422407175",
              "_blank"
            )
          }
        >
          💬
        </button>

        <button
          className="quote-float"
          onClick={() => navigate("contact")}
        >
          📝
        </button>

      </div>

    </main>
  );
}

export default Home;