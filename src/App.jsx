import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Navbar from "./Components/Navbar/Navbar";
import Confession from "./Components/Navbar/Confession";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="Confession" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
