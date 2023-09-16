import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/WebSite/AppNavbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/WebSite/Home";
import About from "./components/WebSite/About";
import Contact from "./components/WebSite//Contact";
import Menu from "./components/WebSite//Menu";
import Footer from "./components/WebSite//Footer";
import Admin from "./components/Admin";
const PublicSite = () => {
  return (
    <>
      <div>
        <AppNavbar />
        <Outlet />
      </div>
    </>
  );
};

const AdminDashboard = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PublicSite />}>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Route>

          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
