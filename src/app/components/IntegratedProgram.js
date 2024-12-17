import Image from "next/image";

export default function IntegratedProgram() {
  return (
    <div className="w-full bg-white sm:py-8 md:py-12 mt-[80px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12">
        {/* Left Side: Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2 hidden md:flex">
          <Image
            src="/images/Asking A Question.png" // Correct image path
            alt="Sample"
            width={328} // Width for desktop size (larger size)
            height={328} // Height for desktop size (larger size)
            layout="intrinsic" // Keeps the image's aspect ratio intact
            className="w-[250.77px] h-[157px] md:w-[328px] md:h-[328px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 md:text-left order-2 md:order-1">
          {/* Title */}
          <p className="text-[22px] font-[700] leading-[33px] text-black md:text-[35px] md:font-[700] md:leading-[60px]">
            Why EuroDoc is the Platinum Standard ?{" "}
          </p>
          {/* Needle Border Effect */}
          <div className="relative mt-2 mb-4 mx-auto md:mx-0 md:block hidden">
            {/* Left side circle (needle part) */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

            {/* Straight line part */}
            <div className="w-[228px] h-1 bg-[#DC143B]"></div>
          </div>
          {/* Points Section */}
          <p className="text-gray-500 mt-6">
            Welcome to a platform where years of frontline experience fuse with
            cutting-edge knowledge. The DMiNetz Integrated Program isn&apos;t
            just an opportunity; it&apos;s a guided journey helmed by mentors
            who&apos;ve walked the path you&apos;re stepping onto. With us, you
            aren&apos;t starting from scratch; you&apos;re standing on the
            shoulders of giants.
          </p>
        </div>
      </div>
    </div>
  );
}
