/** @jsxImportSource react */
"use client";

import Image from "next/image";

const ProgramFeatures = () => {
  const features = [
    {
      title: "Online German Language",
      description:
        "German Language Training from A1 to B2 Level and Exam Training for B2 Goethe Exam through our Language Institute in India.",
      icon: "/images/feature-1.png",
    },
    {
      title: "Assistance with Job Search",
      description:
        "After passing the FSP / KP Exam- Assistance with Job Search including CV Preparation. Interview Preparations.",
      icon: "/images/feature-1.png",
    },
    {
      title: "Translation Of Documents",
      description:
        "Through our trustworthy and court-authorized translators we translate your Application documents into German Language.",
      icon: "/images/feature-1.png",
    },
    {
      title: "Fachsprachprüfung (FSP) Training",
      description:
        "Assistance in Admission in Online/Classroom FSP Courses in Germany as per availability. Access to Online Video Course FSP to KP (Only for medical Doctors).",
      icon: "/images/feature-1.png",
    },
    {
      title: "Feature 5",
      description: "Description for feature 5.",
      icon: "/images/feature-1.png",
    },
    {
      title: "Feature 6",
      description: "Description for feature 6.",
      icon: "/images/feature-1.png",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="container mx-auto">
        {/* Main Section Title */}
        <div className="relative text-center mb-10">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#004AAB] md:text-4xl">
            Program Features
          </h2>

          {/* Needle Effect */}
          <div className="relative mt-2 hidden md:block">
            {/* Container to Align Needle to the Start of the Title */}
            <div className="flex items-center justify-start md:justify-center">
              {/* Left Circular Part */}
              <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
              {/* Straight Line */}
              <div className="w-[200px] h-1 bg-[#DC143B]"></div>
            </div>
          </div>
        </div>

        {/* Features Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between p-6 rounded-lg transition-shadow hover:shadow-md"
              style={{
                width: "480px",
                boxShadow:
                  "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(239, 240, 246, 1)", // More prominent shadow for highlighting
                border: "1px solid #EFF0F6", // Adding a border for extra clarity
              }}
            >
              {/* Icon with Blue Background */}
              <div
                className="flex justify-center bg-[#E6F5FC] rounded-full mb-6"
                style={{ width: "60px", height: "60px" }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50} // Corresponds to w-10 (10 * 4 = 40px)
                  height={50} // Corresponds to h-10 (10 * 4 = 40px)
                  className="w-10 h-10 object-contain mt-6 ms-6" // Retained Tailwind classes for styling
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mt-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-base mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramFeatures;
