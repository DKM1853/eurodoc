import Image from "next/image";
import HeroSection from "./HeroSection";
import PhotoInfoSection from "./PhotoInfoSection";
import CallToAction from "./CallToAction";
import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";

export default function FirstPage() {
  const offers = [
    {
      title: "Online video course",
      description: "eurodoc Special",
      image: "/images/online-video.png", // Placeholder - replace with actual path
    },
    {
      title: "INTEGRATED PROGRAM FOR DOCTORS & DENTISTS",
      description: "eurodoc Special",
      image: "/images/integrated_program.png", // Placeholder - replace with actual path
    },
    {
      title: "Eurodoc COMMUNITY",
      description: "eurodoc Special",
      image: "/images/online-video.png", // Placeholder - replace with actual path
    },
  ];
  return (
    <div className="Home">
      <HeroSection />
      <div className="w-full bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12">
          {/* Left Side: Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/images/Group 1261152733.png"
              alt="Sample"
              width={554} // Set the width
              height={347} // Set the height
              className="w-[250.77px] h-[157px] md:w-[554.26px] md:h-[347px] object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 px-4 text-center md:text-left">
            <p className="font-mulish text-[22px] font-bold leading-[33px] text-black md:text-[40px] md:font-[700] md:leading-[60px]">
              Have Queries about Medical / Dental Career in Germany?
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto md:mx-0 md:block hidden">
              {/* Left side circle (needle part) */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

              {/* Straight line part */}
              <div className="w-40 h-1 bg-[#DC143B]"></div>
            </div>

            <p className="text-gray-600 text-[18px] font-medium leading-[30px] text-blue-800 md:text-[28px] md:font-medium md:leading-[45px] mt-4 md:mt-8">
              Want to talk to someone who is working as a Doctor in Germany
              since almost a Decade and has Guided hundreds of doctors in the
              journey?
            </p>

            {/* Button Below Description */}
            <button className="mt-6 px-[40px] py-[10px] gap-[10px] rounded-[12px] bg-[#004AAB] text-white border-2 hover:border-[#004AAB] hover:bg-white hover:text-[#004AAB] transition-all">
              Book initial Appointment{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFEEF1] rounded-[16px] py-4 relative">
          {/* Image on Top-Left Corner */}
          <div className="hidden md:block absolute left-2 w-[150px] h-[150px]">
            <Image
              src="/images/medicine_hand.png"
              alt="Left Corner Image"
              width={500} // Set desired width
              height={500} // Set desired height
              className="object-cover"
            />
          </div>

          <h2 className="font-nunito text-center text-[45px] font-bold text-[#004AAB] mb-4 relative">
            Our Offers
            {/* Needle Border Effect */}
            <div className="relative mt-2 mx-auto w-fit md:block hidden">
              <div className="flex items-center justify-center">
                {/* Left Circular Part */}
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                {/* Straight Line */}
                <div className="w-[220px] h-1 bg-red-500"></div>
              </div>
            </div>
          </h2>

          <p className="text-center text-lg text-gray-500 mb-10">
            ONE-STOP SOLUTION: From DECISION to APPROBATION
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="w-80 h-100 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={250}
                  height={250}
                  className="mx-auto"
                />
                <h3 className="font-nunito mt-4 text-2xl font-bold text-black text-center leading-[1.5]">
                  {offer.title}
                </h3>
                <div className="flex-grow"></div>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhotoInfoSection />
      {/* <section className="relative bg-pink-100 py-12 px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 relative">
            <img
              src="/images/animated-heart.png" // Replace with correct path
              alt="Heart Icon"
              className="w-18 h-16 mr-2 md:mr-4"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 flex items-center">
              What Our Students Say
            </h2>
          </div>

          <div className="relative flex">
            <div className="hidden md:block sticky left-0 top-0 z-10">
              <img
                src="/images/vector-doctor.png" // Replace with correct path
                alt="Doctor Illustration"
                className="w-[150px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-row overflow-x-auto space-x-6 md:space-x-8 px-4 md:px-0">
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-w-[300px] md:min-w-[400px]"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src="/images/testimonial-1.png" // Replace with correct path
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Leticia Kutch
                    </h3>
                    <p className="text-gray-600 text-center text-sm my-4">
                      Sapiente consequatur exercitationem quasi eum corporis
                      sit. Aut consectetur maxime debitis quam voluptatem aut
                      consequatur voluptatem.
                    </p>
                    <p className="text-yellow-500 font-medium">
                      5.0/5.0 rating ⭐⭐⭐⭐⭐
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <img
            src="/images/testimotial-design.png" // Replace with correct path
            alt="Double Quotes"
            className="absolute right-[-30px] top-[-40px] w-[80px] md:w-[100px] z-0"
          />
        </div>
      </section> */}
      <TestimonialsSection />

      <CallToAction />

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4 md:px-12">
          {/* Title Section */}
          <div className="flex items-start justify-between">
            {/* Title and Description */}
            <div>
              <p className="text-[22px] font-bold leading-[33px] text-blue-800 md:text-[40px] md:leading-[60px]">
                Requirements for Medical PG <br />
                in Germany:
              </p>
              {/* Needle Border Effect */}
              <div className="relative mt-2 mb-4 hidden md:block">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-red-600"></div>
                <div className="w-[228px] h-1 bg-red-600"></div>
              </div>
              {/* Description */}
              <p className="text-[#6D6D6D] text-md md:text-base mt-2">
                Some major requirements to start your Specialist Training in
                Germany.
              </p>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <Image
                src="/images/reciept.png" // Replace with your image path
                alt="Requirements Icon"
                width={200} // Set width explicitly
                height={160} // Set height explicitly
                className="object-contain mt-8" // Maintains the positioning and aspect ratio
              />
            </div>
          </div>

          {/* Points Section */}
          <div className="mt-6">
            {/* For Desktop */}
            <div className="hidden md:grid md:grid-cols-2">
              <div className="">
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Completed Medical / Dental Training
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Completed 12 Months Rotational Internship
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  License to Practice Medicine / Dentistry
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  German Language Level B2 Certificate
                </p>
              </div>
              <div className="">
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Pass Knowledge Test in Germany
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Pass Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Pass Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Pass Knowledge Test in Germany
                </p>
              </div>
            </div>

            {/* For Mobile */}
            <div className="block md:hidden">
              <div className="flex flex-col gap-4">
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Completed Medical / Dental Training
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Completed 12 Months Rotational Internship
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  License to Practice Medicine / Dentistry
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  German Language Level B2 Certificate
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Pass Knowledge Test in Germany
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Pass Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Pass Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Pass Knowledge Test in Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12">
          {/* Left Side: Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
            <Image
              src="/images/doctors.png"
              alt="Sample"
              width={700} // Largest width (md:w-[700px]) specified explicitly
              height={500} // Largest height (md:h-[500px]) specified explicitly
              className="object-cover rounded-lg w-[250.77px] h-[157px] md:w-[700px] md:h-[500px]" // Preserve responsiveness
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 md:text-left order-2 md:order-1">
            {/* Title */}
            <p className="text-[22px] font-[700] leading-[33px] text-blue-800 md:text-[40px] md:font-[700] md:leading-[60px]">
              Some Benefits of Career and Life in Germany.
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto md:mx-0 md:block hidden">
              {/* Left side circle (needle part) */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

              {/* Straight line part */}
              <div className="w-[228px] h-1 bg-[#DC143B]"></div>
            </div>

            {/* Points Section */}
            <ul className="text-gray-600 md:ps-8 text-[18px] font-[500] leading-[30px] text-blue-800 md:text-[20px] md:font-[500] md:leading-[45px] mt-4 md:mt-8 list-disc list-inside md:list-outside">
              <li>High Demand and Job Security</li>
              <li>Competitive Salary and Benefits</li>
              <li>State Of The Art Healthcare Infrastructure</li>
              <li>Social Security And Good Income</li>
              <li>Work Life Balance</li>
              <li>High Demand For Qualified Professionals</li>
            </ul>
          </div>
        </div>
      </div>
      <FAQSection />
      <ContactUs />
    </div>
  );
}
