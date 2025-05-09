import Login from "./components/Login";
import { Link, NavLink } from "react-router-dom";

import HomeNav from "./components/Home/HomeNav";
import Hero from "./components/Home/Hero";
import Who from "./components/Home/Who";
import WhyJoin from "./components/Home/WhyJoin";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <HomeNav />
      <Hero />
      <Who />
      <WhyJoin />
      <Footer />
    </>
  );
}

export default App;
