import { Route } from "react-router-dom";
import Home from "../components/WebSite/Home";
import About from "../components/WebSite/About";
import Contact from "../components/WebSite//Contact";
import Menu from "../components/WebSite//Menu";

const WebSiteRoutes = () => {
  return (
    <>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/menu" element={<Menu />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
    </>
  );
};

export default WebSiteRoutes;
