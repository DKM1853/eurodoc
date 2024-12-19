/** @jsxImportSource react */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonialsRef = useRef(null);
  const totalTestimonials = 10; // Total number of testimonials
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = Math.ceil(totalTestimonials / (isMobile ? 1 : 3)); // Adjust testimonials per page dynamically

  // Function to scroll to a specific page
  const scrollTestimonials = (pageIndex) => {
    const container = testimonialsRef.current;
    if (!container) return;

    const testimonialWidth = container.firstChild.offsetWidth;
    const scrollAmount = testimonialWidth * pageIndex;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setCurrentPage(pageIndex);
  };

  // Sync the page indicator with manual scroll
  const handleScroll = () => {
    const container = testimonialsRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const testimonialWidth = container.firstChild.offsetWidth;

    const newPageIndex = Math.round(scrollLeft / testimonialWidth);
    setCurrentPage(newPageIndex);
  };

  // Update the layout dynamically based on screen size
  const updateLayout = () => {
    const isMobileScreen = window.innerWidth <= 768; // Mobile threshold
    setIsMobile(isMobileScreen);
  };

  useEffect(() => {
    updateLayout(); // Check layout on mount
    window.addEventListener("resize", updateLayout);

    const container = testimonialsRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", updateLayout);
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="relative bg-[#FFEEF1] py-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-8 relative">
          <Image
            src="/images/animated-heart.png"
            alt="Heart Icon"
            width={80} // Corresponds to w-18 (18 * 4 = 72px)
            height={70} // Corresponds to h-16 (16 * 4 = 64px)
            className="w-18 h-16 mr-2 md:mr-4 hidden md:block" // Retained Tailwind classes for styling
          />
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            What Our Students Say
            {/* Border Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 -ms-8 items-center justify-center hidden md:flex">
              {/* Circle */}
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              {/* Horizontal Line */}
              <div className="w-[150px] h-1 bg-red-500"></div>
            </div>
          </h2>
        </div>

        <div className="relative flex">
          {/* Sticky Doctor Image */}
          <Image
            src="/images/vector-doctor.png"
            alt="Doctor Illustration"
            width={150} // Add width
            height={150} // Add height
            className="w-[150px] h-auto absolute top-[-50%] object-contain hidden md:block"
          />

          {/* Testimonials Section */}
          <div
            ref={testimonialsRef}
            className="flex overflow-x-auto space-x-4 snap-x snap-mandatory px-4 md:px-0"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for IE/Edge
            }}
          >
            {Array.from({ length: totalTestimonials }, (_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg snap-center shadow-2xl"
                style={{
                  minWidth: isMobile
                    ? "calc(100% - 15%)"
                    : "calc(33.333% - 16px)", // Full container + part for mobile, 3 containers for desktop
                  width: isMobile ? "calc(100% - 15%)" : "calc(33.333% - 16px)",
                  maxWidth: "400px", // For large screens
                }}
              >
                {/* User Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/testimonial-1.png"
                    alt="User"
                    width={500} // Set the width you want
                    height={500} // Set the height you want
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* User Name */}
                <h3 className="text-lg font-bold text-gray-800">
                  {`User ${index + 1}`}
                </h3>
                {/* Testimonial Description */}
                <p className="text-gray-600 text-center text-sm my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus.
                </p>
                {/* Rating */}
                <p className="text-black font-medium">
                  {`${Math.max(1, Math.min(5, (index % 5) + 1))}.0/5.0 rating `}{" "}
                  ⭐⭐⭐⭐⭐
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => scrollTestimonials(i)}
              className={`h-3 w-3 mx-1 rounded-full transition-colors duration-300 ${
                i === currentPage ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>

        {/* Double Quote Image */}
        <Image
          src="/images/testimotial-design.png"
          alt="Double Quotes"
          width={200} // Set the width you want
          height={200} // Set the height you want (adjust this as needed)
          className="absolute right-[-30px] top-[-50px] w-[80px] md:w-[100px] z-10"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
