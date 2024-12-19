const ContactHeroSection = () => {
  return (
    <div
      className="relative mt-[60px] md:mt-[100px] sm:mt-[75px] h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/contact-hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        {/* Title */}
        <h1
          className="font-mulish text-[32px] sm:text-[40px] lg:text-[55px] leading-[40px] sm:leading-[50px] lg:leading-[73px] text-center text-white"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          GET IN TOUCH
        </h1>
      </div>
    </div>
  );
};

export default ContactHeroSection;
