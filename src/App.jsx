import Login from "./components/Login";
import { Link, NavLink } from "react-router-dom";
import SNavBar from "./components/Social/SNavBar";
import Feed from "./components/Social/Feed";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h1>This is the home page of the app</h1>
        <Link to="login" replace={true}>
          Go to login
        </Link>
      </div>
    </>
  );
}

export default App;
