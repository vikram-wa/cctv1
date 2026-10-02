import React from "react";

function Blog({ navigate }) {

  const blogs = [
    {
      icon: "📹",
      title: "Top 10 CCTV Buying Mistakes",
      text: "Important points to consider before selecting a CCTV system."
    },
    {
      icon: "🔍",
      title: "IP vs Analog CCTV",
      text: "Understand the basic difference between IP and Analog CCTV."
    },
    {
      icon: "💾",
      title: "CCTV Recording & Storage",
      text: "Learn about recording duration and storage requirements."
    },
    {
      icon: "🔐",
      title: "Benefits of Access Control",
      text: "Understand how access control improves premises security."
    },
    {
      icon: "🔥",
      title: "Why Fire Alarm Systems Matter",
      text: "Important information about fire detection systems."
    },
    {
      icon: "🌐",
      title: "Networking Best Practices",
      text: "Basic practices for reliable business networking."
    },
    {
      icon: "🤖",
      title: "AI Cameras Explained",
      text: "Learn about AI features available in modern cameras."
    },
    {
      icon: "🛠️",
      title: "Benefits of AMC",
      text: "Why regular maintenance is important for security systems."
    }
  ];

  return (
    <section className="page">

      <div className="section-heading">

        <span>JEPL BLOG</span>

        <h1>
          Security & Technology Insights
        </h1>

        <p>
          Useful information about CCTV, networking,
          access control, fire safety and technology.
        </p>

      </div>

      <div className="blog-grid">

        {blogs.map((blog, index) => (

          <article
            className="blog-card"
            key={index}
          >

            <div className="blog-icon">
              {blog.icon}
            </div>

            <h2>{blog.title}</h2>

            <p>{blog.text}</p>

            <button
              onClick={() => navigate("contact")}
            >
              Read More →
            </button>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Blog;