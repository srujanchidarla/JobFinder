import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams(); // Get category from URL if using dynamic routes

  const ADZUNA_API_KEY = import.meta.env.VITE_ADZUNA_API_KEY;
  const ADZUNA_APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;

  useEffect(() => {
    const fetchJobs = async () => {
      // Construct the API URL with category filters (if any)
      let apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_API_KEY}&results_per_page=10`;

      // If a category is provided (like 'software-engineer'), include it as a filter in the query
      if (category) {
        apiUrl += `&what=${category.replace("-", " ")}`; // Replace hyphens with spaces for better query formatting
      }

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Error fetching jobs: ${res.status}`);
        }

        const data = await res.json();
        setJobs(data.results); // Assuming `results` contains job listings
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [category]); // Fetch jobs again if the category changes

  if (loading) {
    return <p className="text-center text-lg">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        {category
          ? `Showing ${category.replace("-", " ")} Jobs`
          : "Job Listings"}
      </h2>

      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-gray-700 mt-2">
                  {job.description.substring(0, 100)}...
                </p>
                <p className="text-gray-600 mt-3">
                  <strong>Location:</strong> {job.location.display_name}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Salary:</strong> ${job.salary_min} - ${job.salary_max}{" "}
                  / year
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full block text-center transition duration-300 ease-in-out"
                >
                  Apply Here
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No jobs available in this category.
        </p>
      )}
    </div>
  );
};

export default JobListings;
