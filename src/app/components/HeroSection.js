const HeroSection = () => {
  return (
    <div
      className="relative mt-[64px] h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/image-22.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#034AAC] opacity-80"></div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        {/* Title */}
        <h1
          className="font-mulish text-[32px] sm:text-[40px] lg:text-[60px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[73px] text-center text-white"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Your Gateway to <br />
          <span className="bg-white text-[#0077B6] px-2 inline-block rounded">
            German Healthcare
          </span>{" "}
          Career
        </h1>

        {/* Subtitle */}
        <p
          className="font-poppins font-medium text-[20px] sm:text-[28px] lg:text-[20px] leading-[36px] sm:leading-[40px] lg:leading-[45px] text-center text-white mt-6 mx-auto"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            maxWidth: "90%", // For mobile
          }}
        >
          Trusted By Thousands Of Healthcare Professionals Across The World{" "}
        </p>

        {/* Button */}
        <button className="mt-6 bg-white rounded-[12px] text-[#0077B6] border-2 border-[#0077B6] px-4 sm:px-10 py-2 font-semibold hover:border-white hover:bg-[#0077B6] hover:text-white transition-all text-sm sm:text-base">
          Book My Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
