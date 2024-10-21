import JobListings from "../components/JobListings";
import { useState } from "react";

const JobsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { label: "All", value: "" },
    { label: "Software Engineer", value: "software-engineer" },
    { label: "Designer", value: "designer" },
    { label: "Product Manager", value: "product-manager" },
    { label: "Data Scientist", value: "data-scientist" },
    { label: "DevOps Engineer", value: "devops-engineer" },
    { label: "Marketing Manager", value: "marketing-manager" },
    { label: "Sales Executive", value: "sales-executive" },
    { label: "Human Resources", value: "human-resources" },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="bg-blue-50 px-4 py-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          All Jobs
        </h2>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="category">
            Filter by Category
          </label>
          <select
            id="category"
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 transition duration-300 ease-in-out"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Pass the selected category to JobListings */}
        <JobListings category={selectedCategory} />
      </div>
    </section>
  );
};

export default JobsPage;
