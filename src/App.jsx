import Login from "./components/Login";
import { Link, NavLink } from "react-router-dom";
import SNavBar from "./components/Social/SNavBar";
import Feed from "./components/Social/Feed";
import HomeNav from "./components/Home/HomeNav";
import Hero from "./components/Home/Hero";
import Who from "./components/Home/Who";

function App() {
  return (
    <>
      <HomeNav />
      <Hero />
      <Who />
    </>
  );
}

export default App;
