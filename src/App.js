import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Project from "./pages/projects/Project";
import Services from "./pages/services/Services";
import Academy from "./pages/academy/Academy";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="App">
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/projects" element={<Project />} />

        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
