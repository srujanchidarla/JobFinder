import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      {/* Hero for General Jobs */}
      <Link to="/jobs">
        <Hero
          title="Find Your Dream Job"
          subtitle="Explore roles in various fields"
          bgColor="bg-emerald-600"
          textColor="text-gray-100"
        />
      </Link>

      <HomeCards />

      {/* Display only 3 jobs on the home page */}
      <JobListings isHome={true} limit={3} />

      <ViewAllJobs />
    </>
  );
};

export default HomePage;
