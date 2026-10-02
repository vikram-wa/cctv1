import React from "react";

function AdminDashboard({
  enquiries,
  deleteEnquiry,
  setLoggedIn,
  navigate
}) {

  return (
    <div className="admin-dashboard">

      <aside className="admin-sidebar">

        <div className="admin-brand">
          📹 JEPL
        </div>

        <button>
          📊 Dashboard
        </button>

        <button>
          📩 Enquiries
          <span className="count">
            {enquiries.length}
          </span>
        </button>

        <button
          onClick={() => navigate("home")}
        >
          🌐 Website
        </button>

        <button
          onClick={() => setLoggedIn(false)}
        >
          🚪 Logout
        </button>

      </aside>

      <main className="admin-main">

        <div className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>

            <p>
              JEPL Website Management
            </p>
          </div>

          <button
            className="logout"
            onClick={() =>
              setLoggedIn(false)
            }
          >
            Logout
          </button>

        </div>

        <div className="admin-cards">

          <div>
            <span>📩</span>
            <p>Total Enquiries</p>
            <strong>
              {enquiries.length}
            </strong>
          </div>

          <div>
            <span>📁</span>
            <p>Projects</p>
            <strong>1000+</strong>
          </div>

          <div>
            <span>👥</span>
            <p>Clients</p>
            <strong>500+</strong>
          </div>

          <div>
            <span>🛠️</span>
            <p>Services</p>
            <strong>10</strong>
          </div>

        </div>

        <section className="enquiry-section">

          <div className="section-title">

            <h2>
              Customer Enquiries
            </h2>

            <span>
              {enquiries.length} Records
            </span>

          </div>

          {enquiries.length === 0 ? (

            <div className="empty-enquiry">

              <div>📭</div>

              <h3>
                No Enquiries Yet
              </h3>

              <p>
                Customer enquiries submitted from
                Contact page will appear here.
              </p>

            </div>

          ) : (

            <div className="enquiry-list">

              {enquiries.map((item) => (

                <div
                  className="enquiry-card"
                  key={item.id}
                >

                  <div className="enquiry-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      📞 {item.phone}
                    </p>

                    <p>
                      ✉️ {item.email || "Not provided"}
                    </p>

                    <p>
                      🛠️ {item.service || "General Enquiry"}
                    </p>

                    <p>
                      💬 {item.message}
                    </p>

                    <small>
                      {item.date}
                    </small>

                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteEnquiry(item.id)
                    }
                  >
                    🗑 Delete
                  </button>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;