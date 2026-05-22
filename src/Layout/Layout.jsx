import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="sticky z-100 top-0 ">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
