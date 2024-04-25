import { Navigate } from "react-router-dom";

import React from "react";

const ProtectRoutes = ({ children, auth }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectRoutes;
