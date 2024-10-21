const Hero = ({
  title = "Find Your Dream Job",
  subtitle = "Explore various roles that fit your skills and career aspirations",
  bgColor = "bg-emerald-600", // Default background color
  textColor = "text-white", // Default text color
}) => {
  return (
    <section className={`${bgColor} py-20 mb-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1
            className={`text-4xl font-extrabold sm:text-5xl md:text-6xl ${textColor}`}
          >
            {title}
          </h1>
          <p className={`my-4 text-xl ${textColor}`}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
