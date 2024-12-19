/** @jsxImportSource react */
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const PhotoInfoSection = () => {
  const scrollRef = useRef(null);
  const [showMore, setShowMore] = useState([]);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;

    if (direction === "left") {
      container.scrollLeft -= containerWidth * 0.8; // Scroll back by 80% of the container width
    } else {
      container.scrollLeft += containerWidth * 0.8; // Scroll forward by 80% of the container width
    }
  };

  const handleKnowMore = (index) => {
    setShowMore((prev) => {
      const newShowMore = [...prev];
      newShowMore[index] = !newShowMore[index]; // Toggle visibility for the specific index
      return newShowMore;
    });
  };

  const offers = [
    {
      title: "Online video course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/images/photos-info.png",
    },
    {
      title: "INTEGRATED PROGRAM FOR DOCTORS & DENTISTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/images/photos-info.png",
    },
    {
      title: "Eurodoc COMMUNITY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/images/photos-info.png",
    },
    {
      title: "Online video course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/images/photos-info.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title and Navigation Buttons */}
      <div className="flex flex-row sm:flex-row justify-between items-center mb-16">
        <h2 className="text-2xl md:text-4xl sm:text-3xl font-bold flex items-center text-[#004AAB] md:ms-8">
          Photos and information
          {/* Needle Border Effect */}
          <div className="absolute mt-12 mx-auto w-fit md:block hidden">
            <div className="flex items-center justify-center">
              {/* Left Circular Part */}
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              {/* Straight Line */}
              <div className="w-[180px] h-1 bg-red-500"></div>
            </div>
          </div>
        </h2>
        <div className="flex gap-2 mt-4 sm:mt-0 md:hidden">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 bg-[#FDF1F5] rounded-lg hover:bg-[#FCE1E8] transition-all duration-200"
          >
            <span className="text-[#E83954] text-2xl">&#8592;</span>
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 bg-[#FDF1F5] rounded-lg hover:bg-[#FCE1E8] transition-all duration-200"
          >
            <span className="text-[#E83954] text-2xl">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Scrollable Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll sm:overflow-visible sm:grid sm:grid-cols-2 gap-4 scroll-snap-x snap-mandatory"
      >
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`relative snap-start flex-shrink-0 shadow-md sm:shadow-md md:shadow-none rounded-[6.9px] border-[1px] border-[#D8D8D8] md:border-0
            w-[303.84px] h-auto
        sm:w-[300px] sm:h-auto 
        md:w-auto md:h-auto
        ${index % 2 !== 0 ? "sm:-translate-y-16" : ""}`}
          >
            {/* Image */}
            <Image
              src={offer.image}
              alt={offer.title}
              width={606}
              height={391}
              layout="intrinsic"
              className="rounded-[6.9px] sm:rounded-[12px] w-full h-full object-cover p-2"
            />

            {/* Text Container */}
            <div className="py-2 px-4 bg-white bg-opacity-90 rounded-[6.9px]">
              <h3 className="text-lg sm:text-lg md:text-2xl font-bold">
                {offer.title}
              </h3>

              {/* Show full description on mobile, toggle button on larger screens */}
              <p className="text-gray-600 text-sm leading-[2] mt-4">
                <span className="block sm:hidden">{offer.description}</span>{" "}
                {/* Full description for mobile */}
                <span className="hidden sm:block">
                  {showMore[index]
                    ? offer.description
                    : `${offer.description.substring(0, 50)}...`}
                </span>
              </p>

              {/* "Know More" button hidden on mobile */}
              <button
                className="mt-2 text-sm text-[#004AAB] border border-[#004AAB] rounded-md px-6 py-2 hover:bg-[#004AAB] hover:text-white transition-all hidden sm:inline-block"
                onClick={() => handleKnowMore(index)}
              >
                {showMore[index] ? "Show Less" : "Know More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoInfoSection;
