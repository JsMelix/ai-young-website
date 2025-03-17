import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExamplesAbout } from "./screens/ExamplesAbout/ExamplesAbout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ExamplesAbout />
  </StrictMode>,
);
