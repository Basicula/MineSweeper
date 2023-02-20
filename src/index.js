import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../style/main.css";

import MineSweeper from "./MineSweeper";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MineSweeper />
  </StrictMode>
);
