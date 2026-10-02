import React, { useState } from "react";

import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

function Admin({
  navigate,
  enquiries,
  deleteEnquiry
}) {

  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {

    return (
      <AdminLogin
        setLoggedIn={setLoggedIn}
        navigate={navigate}
      />
    );

  }

  return (
    <AdminDashboard
      enquiries={enquiries}
      deleteEnquiry={deleteEnquiry}
      setLoggedIn={setLoggedIn}
      navigate={navigate}
    />
  );
}

export default Admin;