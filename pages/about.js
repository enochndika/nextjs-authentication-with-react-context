import React from "react";
import { ProtectRoute } from "../auth/protectedRoutes";

const About = () => {
  return (
    <div>
      <h1>ABout</h1>
    </div>
  );
};

export default ProtectRoute(About);
