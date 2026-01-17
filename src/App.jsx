import { Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
