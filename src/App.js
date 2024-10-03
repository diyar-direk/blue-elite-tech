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
import Activities from "./pages/dashboard/pages/Activities";
import Login from "./pages/Login";
import AdminAuth from "./auth/AdminAuth";
import Courses from "./pages/dashboard/pages/courses/Courses";
import UpdateCours from "./pages/dashboard/pages/courses/UpdateCourse";
import AddCours from "./pages/dashboard/pages/courses/AddCours";
import Projects from "./pages/dashboard/pages/projects/Projects";
import UpdateProject from "./pages/dashboard/pages/projects/UpdateProject";
import AddProject from "./pages/dashboard/pages/projects/AddProject";
import Users from "./pages/dashboard/pages/users/Users";
import AddUser from "./pages/dashboard/pages/users/AddUser";
import Auth from "./auth/Auth";
import Refresh from "./auth/Refresh";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="App">
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our_services" element={<Services />} />
        <Route path="/our_academy" element={<Academy />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/our_projects" element={<Project />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Refresh />}>
          <Route element={<Auth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:id" element={<UpdateCours />} />
              <Route path="add_cours" element={<AddCours />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="projects/:id" element={<UpdateProject />} />
              <Route path="add_project" element={<AddProject />} />
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
