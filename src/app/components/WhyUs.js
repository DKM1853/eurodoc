/** @jsxImportSource react */
"use client";

import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="w-full px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="flex-1 mt-6">
          <div
            className="relative w-full"
            style={{ maxWidth: "525px", height: "500px" }}
          >
            <Image
              src="/images/doctor-group.png"
              alt="Doctors illustration"
              width={525} // Default width for desktop
              height={500} // Default height for desktop
              layout="intrinsic" // Keeps original aspect ratio
              className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
              sizes="(max-width: 768px) 305px, 525px"
            />
          </div>
          <style jsx>{`
            @media (max-width: 768px) {
              .next-image {
                max-width: 305px;
                height: 290px !important;
              }
            }
          `}</style>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-black mb-6 md:text-4xl">
            What Makes Us Unbeatable
            <div className="relative mt-2 w-fit md:block hidden">
              <div className="flex items-center justify-center">
                {/* Left Circular Part */}
                <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                {/* Straight Line */}
                <div className="w-[250px] h-1 bg-[#DC143B]"></div>
              </div>
            </div>
          </h2>

          {/* Needle Border Effect */}
          {/* <div className="relative mb-6">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-red-600"></div>
            <div className="w-28 h-1 bg-red-600 ml-5"></div>
          </div> */}

          {/* Points */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                1. Bureaucracy Decoded:
              </h3>
              <div className="flex items-start border-l border-black">
                {/* Vertical Line */}
                <div className="w-[2px] bg-black h-auto mr-4"></div>

                {/* Paragraph */}
                <p className="text-gray-600">
                  Get an edge over others with our exclusive walkthroughs on
                  handling German administrative complexities. (Note: While we
                  facilitate, the final decisions are not under our influence.)
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                2. Resources Galore:
              </h3>

              <div className="flex items-start border-l border-black">
                {/* Vertical Line */}
                <div className="w-[2px] bg-black h-auto mr-4"></div>

                {/* Paragraph */}
                <p className="text-gray-600">
                  Need Your Documents Translated? Confused About Insurance? Our
                  Comprehensive Resource Kit And Special Collaborations Address
                  Every Need, Every Question You Might Have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
