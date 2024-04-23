import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./pages/Home";
import MercuryPage from "./pages/MercuryPage";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Planets-Fact-Site/" element={<MercuryPage />} />
          <Route path="/Planets-Fact-Site/venus" element={<Venus />} />
          <Route path="/Planets-Fact-Site/earth" element={<Earth />} />
          <Route path="/Planets-Fact-Site/mars" element={<Mars />} />
          <Route path="/Planets-Fact-Site/jupiter" element={<Jupiter />} />
          <Route path="/Planets-Fact-Site/saturn" element={<Saturn />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
