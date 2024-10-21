const Hero = ({
  title = "Find Your Dream Job",
  subtitle = "Explore roles in various fields",
  bgColor = "bg-emerald-600",
  textColor = "text-gray-100",
}) => {
  return (
    <section
      className={`${bgColor} py-20 mb-8 transition duration-500 ease-in-out transform hover:scale-105`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1
            className={`text-4xl font-extrabold ${textColor} sm:text-5xl md:text-6xl`}
          >
            {title}
          </h1>
          <p className={`mt-4 text-xl ${textColor} sm:mt-6`}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
