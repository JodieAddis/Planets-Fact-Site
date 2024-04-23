import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MercuryPage from "./pages/MercuryPage";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Planets-Fact-Site/" element={<MercuryPage />} />
          <Route path="/Planets-Fact-Site/venus" element={<Venus />} />
          <Route path="/Planets-Fact-Site/earth" element={<Earth />} />
          <Route path="/Planets-Fact-Site/mars" element={<Mars />} />
          <Route path="/Planets-Fact-Site/jupiter" element={<Jupiter />} />
          <Route path="/Planets-Fact-Site/saturn" element={<Saturn />} />
          <Route path="/Planets-Fact-Site/uranus" element={<Uranus />} />
          <Route path="/Planets-Fact-Site/neptune" element={<Neptune />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
