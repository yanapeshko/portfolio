import React from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

import { Resume } from "./Pages/Resume";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
