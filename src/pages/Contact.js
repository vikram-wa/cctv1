
import React, { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { database } from "../firebase";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      setError(
        "Please fill Name, Phone and Message."
      );
      return;
    }

    try {

      setLoading(true);

      // Realtime Database location
      const enquiriesRef = ref(
        database,
        "contactMessages"
      );

      // Create a new enquiry
      await push(enquiriesRef, {

        name: form.name.trim(),

        phone: form.phone.trim(),

        email: form.email.trim(),

        service: form.service,

        message: form.message.trim(),

        status: "New",

        createdAt: serverTimestamp()

      });

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });

    } catch (firebaseError) {

      console.error(
        "Firebase Error:",
        firebaseError
      );

      setError(
        "Unable to submit enquiry. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="page">

      <div className="section-heading">

        <span>CONTACT US</span>

        <h1>
          Let's Talk About Your Project
        </h1>

        <p>
          Contact JEPL for security, networking and
          technology solutions.
        </p>

      </div>

      <div className="contact-layout">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div>
            <strong>📍 Office</strong>
            <p>Maharashtra, India</p>
          </div>

          <div>
            <strong>📞 Phone</strong>
            <p>+91 9422407175</p>
          </div>

          <div>
            <strong>✉️ Email</strong>
            <p>info@jayelectronics.com</p>
          </div>

          <div>
            <strong>💬 WhatsApp</strong>
            <p>+919422407175</p>
          </div>

          <div>
            <strong>🕐 Business Hours</strong>
            <p>Monday - Saturday</p>
            <p>9:30 AM - 6:30 PM</p>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send Enquiry</h2>

          {success && (
            <div className="form-success">
              {success}
            </div>
          )}

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={loading}
          >

            <option value="">
              Select Service
            </option>

            <option value="CCTV Surveillance">
              CCTV Surveillance
            </option>

            <option value="Networking Solutions">
              Networking Solutions
            </option>

            <option value="Access Control">
              Access Control
            </option>

            <option value="Video Door Phones">
              Video Door Phones
            </option>

            <option value="Fire Alarm Systems">
              Fire Alarm Systems
            </option>

            <option value="EPABX & Intercom">
              EPABX & Intercom
            </option>

            <option value="Audio Visual Solutions">
              Audio Visual Solutions
            </option>

            <option value="LED Display Solutions">
              LED Display Solutions
            </option>

            <option value="Solar Security">
              Solar Security
            </option>

            <option value="AMC Services">
              AMC Services
            </option>

          </select>

          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your requirement *"
            value={form.message}
            onChange={handleChange}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Enquiry →"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;

