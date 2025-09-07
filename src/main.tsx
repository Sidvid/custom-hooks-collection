import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DebounceUse from "./usage/debounce-use.tsx";
import PreviousUse from "./usage/previous-use.tsx";
import IdleUse from "./usage/idle-use.tsx";
import ResponsiveUse from "./usage/responsive-use.tsx";
import IntersectionUse from "./usage/intersection-use.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/use-debounce" element={<DebounceUse />} />
        <Route path="/use-previous" element={<PreviousUse />} />
        <Route path="/use-idle" element={<IdleUse />} />
        <Route path="/use-responsive" element={<ResponsiveUse />} />
        <Route path="/use-intersection" element={<IntersectionUse />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
