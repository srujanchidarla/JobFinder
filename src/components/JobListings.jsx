import { useState, useEffect } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const JobListings = ({ isHome = false, limit = null, category = "" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ADZUNA_API_KEY = import.meta.env.VITE_ADZUNA_API_KEY;
  const ADZUNA_APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;

  useEffect(() => {
    const fetchJobs = async () => {
      let apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_API_KEY}`;

      if (category) {
        apiUrl += `&what=${category.replace("-", " ")}`;
      }

      if (limit) {
        apiUrl += `&results_per_page=${limit}`;
      }

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Error fetching jobs: ${res.status}`);
        }

        const data = await res.json();
        setJobs(data.results);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [category, limit]);

  if (loading) {
    return <p className="text-center text-lg">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        {isHome ? "Recent Jobs" : "Job Listings"}
      </h2>

      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No jobs available.</p>
      )}
    </div>
  );
};

export default JobListings;

const JobCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <FaBriefcase className="text-indigo-500" />
          {job.title}
        </h3>

        {/* Job Description with More/Less Toggle */}
        <p className="text-gray-700 mt-2">
          {showFullDescription
            ? job.description
            : `${job.description.substring(0, 100)}...`}
        </p>

        {/* More / Less Button */}
        <button
          onClick={toggleDescription}
          className="text-indigo-500 hover:text-indigo-600 mt-2 focus:outline-none transition-colors"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>

        {/* Location */}
        <p className="text-gray-600 mt-3 flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <strong>Location:</strong> {job.location.display_name}
        </p>

        {/* Salary */}
        <p className="text-gray-600 mt-1 flex items-center gap-2">
          <FaDollarSign className="text-green-500" />
          <strong>Salary:</strong> ${job.salary_min} - ${job.salary_max} / year
        </p>
      </div>

      <div className="mt-6">
        <a
          href={job.redirect_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full block text-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
};
