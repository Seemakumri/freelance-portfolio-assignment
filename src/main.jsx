import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
// Correctly assign the root
const root = createRoot(document.getElementById('root'));
root.render(<App />);
