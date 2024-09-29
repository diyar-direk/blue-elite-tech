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
import AddCours from "./pages/dashboard/pages/AddCours";
import Courses from "./pages/dashboard/pages/Courses";
import AddProject from "./pages/dashboard/pages/AddProject";
import Activities from "./pages/dashboard/pages/Activities";
import Login from "./pages/Login";
import Projects from "./pages/dashboard/pages/Projects";
import Auth from "./auth/Auth";
import Refresh from "./auth/Refresh";
import AdminAuth from "./auth/AdminAuth";
import Users from "./pages/dashboard/pages/Users";
import AddUser from "./pages/dashboard/pages/AddUser";

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
        <Route path="/login" element={<Login />} />

        <Route element={<Refresh />}>
          <Route element={<Auth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add_cours" element={<AddCours />} />
              <Route path="courses" element={<Courses />} />
              <Route path="add_project" element={<AddProject />} />
              <Route path="Projects" element={<Projects />} />
              <Route element={<AdminAuth />}>
                <Route path="activities" element={<Activities />} />
                <Route path="users" element={<Users />} />
                <Route path="add_user" element={<AddUser />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
