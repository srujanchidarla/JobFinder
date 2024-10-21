import { useParams } from "react-router-dom";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  const { category } = useParams(); // Get category from URL

  return (
    <section className="bg-blue-50 px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        {category ? `Showing ${category} Jobs` : "All Jobs"}
      </h2>
      <JobListings category={category} />
    </section>
  );
};

export default JobsPage;
