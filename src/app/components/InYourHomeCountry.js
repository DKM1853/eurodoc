import Image from "next/image";

const InYourHomeCountry = () => {
  return (
    <section className="py-10 px-4 md:px-12 bg-white">
      {/* Section Title */}
      <h2 className="text-black font-bold text-[24px] md:text-[32px] mb-10 text-center relative">
        ..In Your Home Country
        {/* Needle Border Effect */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-fit hidden md:block">
          <div className="flex items-center">
            {/* Left Circular Part */}
            <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
            {/* Straight Line */}
            <div className="w-[180px] h-1 bg-[#DC143B]"></div>
          </div>
        </div>
      </h2>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        {/* Image on Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/doctor-report.png" // Replace with your image path
            alt="German Language Courses"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        {/* Content on Right */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            German Language Courses
          </h3>
          <p className="text-[#6D6D6D] text-sm md:text-base leading-relaxed">
            Our German courses with expert language teachers are available both
            online and offline and are tailored to help you gain proficiency
            (A1-C1 GER).
            <br />
            <br />
            Our German courses with expert language teachers are available both
            online and offline and are tailored to help you gain proficiency
            (A1-C1 GER).
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-8">
        {/* Content on Left */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Berufserlaubnis Application (Temporary License)
          </h3>
          <p className="text-[#6D6D6D] text-sm md:text-base leading-relaxed">
            We guide you through the application process for obtaining your
            temporary medical license, ensuring all documentation is correctly
            submitted.
          </p>
        </div>
        {/* Image on Right */}
        <div className="w-full md:w-1/2 flex justify-start">
          <Image
            src="/images/report-board.png" // Replace with your image path
            alt="License Application"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InYourHomeCountry;
