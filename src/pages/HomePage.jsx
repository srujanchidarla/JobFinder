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
          bgColor="bg-blue-600"
          textColor="text-gray-100"
        />
      </Link>

      {/* Hero for Designer Jobs */}
      <Link to="/jobs/designer">
        <Hero
          title="Become a Designer"
          subtitle="Creative roles to shape your career"
          bgColor="bg-yellow-500"
          textColor="text-black"
        />
      </Link>

      {/* Hero for Software Engineering Jobs */}
      <Link to="/jobs/software-engineer">
        <Hero
          title="Software Engineer Opportunities"
          subtitle="Explore full stack and backend roles"
          bgColor="bg-red-500"
          textColor="text-white"
        />
      </Link>

      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
