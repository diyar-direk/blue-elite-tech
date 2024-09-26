import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Academy from "./pages/academy/Academy";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
