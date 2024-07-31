import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div className="navbar-ignore">
      <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
