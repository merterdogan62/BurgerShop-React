import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="d-flex flex-column">
      <BrowserRouter>
        <AppNavbar></AppNavbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
