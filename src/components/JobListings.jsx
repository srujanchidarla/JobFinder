import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store fetch errors

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
          // Check if response is not ok (e.g., 404 or 500)
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
        setError(error.message); // Store the error message in state
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]); // Add isHome to the dependency array so it fetches again if this changes

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 text-center">
        <p>Failed to load job listings. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No jobs available.</p>
        )}
      </div>
    </section>
  );
};

export default JobListings;
