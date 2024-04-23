import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./pages/Home";
import Mercury from "./pages/Mercury";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />} />
      </Routes>
    </Router>
  );
}

export default App;
