import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import jobFinderLogo from "../assets/images/job_finder.jpg";

const MainLayout = () => {
  return (
    <>
      <Navbar brandTitle="JobFinder" brandLogo={jobFinderLogo} />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
