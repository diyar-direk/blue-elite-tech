import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/Services";
import Academy from "./pages/Academy";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
