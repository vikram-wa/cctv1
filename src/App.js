import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import About from "./pages/About";
import CompanyProfile from "./pages/CompanyProfile";
import OurStory from "./pages/OurStory";
import VisionMission from "./pages/VisionMission";
import CoreValues from "./pages/CoreValues";
import WhyChoose from "./pages/WhyChoose";
import Leadership from "./pages/Leadership";
import OurTeam from "./pages/OurTeam";

import Solutions from "./pages/Solutions";
import CCTV from "./pages/CCTV";
import Networking from "./pages/Networking";
import AccessControl from "./pages/AccessControl";
import VideoDoorPhone from "./pages/VideoDoorPhone";
import FireAlarm from "./pages/FireAlarm";
import EPABX from "./pages/EPABX";
import AudioVisual from "./pages/AudioVisual";
import LEDDisplay from "./pages/LEDDisplay";
import SolarSecurity from "./pages/SolarSecurity";
import AMC from "./pages/AMC";

import Blog from "./pages/Blog";

import Admin from "./admin/Admin";

function App() {
  const [page, setPage] = useState("home");

  const [enquiries, setEnquiries] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("jepl_enquiries")
      ) || [];
    } catch {
      return [];
    }
  });

  const navigate = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const addEnquiry = (data) => {
    const newEnquiry = {
      id: Date.now(),
      ...data,
      date: new Date().toLocaleString()
    };

    const updated = [
      ...enquiries,
      newEnquiry
    ];

    setEnquiries(updated);

    localStorage.setItem(
      "jepl_enquiries",
      JSON.stringify(updated)
    );

    alert("Your enquiry has been submitted successfully!");
  };

  const deleteEnquiry = (id) => {
    const updated = enquiries.filter(
      (item) => item.id !== id
    );

    setEnquiries(updated);

    localStorage.setItem(
      "jepl_enquiries",
      JSON.stringify(updated)
    );
  };

  const renderPage = () => {
    switch (page) {

      case "home":
        return <Home navigate={navigate} />;

      /* ABOUT */

      case "about":
        return <About navigate={navigate} />;

      case "company":
        return <CompanyProfile />;

      case "story":
        return <OurStory />;

      case "vision":
        return <VisionMission />;

      case "values":
        return <CoreValues />;

      case "why":
        return <WhyChoose />;

      case "leadership":
        return <Leadership />;

      case "team":
        return <OurTeam />;

      /* SOLUTIONS */

      case "solutions":
        return <Solutions navigate={navigate} />;

      case "cctv":
        return <CCTV navigate={navigate} />;

      case "networking":
        return <Networking navigate={navigate} />;

      case "access":
        return <AccessControl navigate={navigate} />;

      case "doorphone":
        return <VideoDoorPhone navigate={navigate} />;

      case "fire":
        return <FireAlarm navigate={navigate} />;

      case "epabx":
        return <EPABX navigate={navigate} />;

      case "av":
        return <AudioVisual navigate={navigate} />;

      case "led":
        return <LEDDisplay navigate={navigate} />;

      case "solar":
        return <SolarSecurity navigate={navigate} />;

      case "amc":
        return <AMC navigate={navigate} />;

      /* BLOG */

      case "blog":
        return <Blog navigate={navigate} />;

      /* CONTACT */

      case "contact":
        return (
          <Contact
            addEnquiry={addEnquiry}
          />
        );

      /* ADMIN */

      case "admin":
        return (
          <Admin
            navigate={navigate}
            enquiries={enquiries}
            deleteEnquiry={deleteEnquiry}
          />
        );

      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <>
      {page !== "admin" && (
        <Navbar
          navigate={navigate}
          activePage={page}
        />
      )}

      {renderPage()}

      {page !== "admin" && (
        <Footer navigate={navigate} />
      )}
    </>
  );
}

export default App;