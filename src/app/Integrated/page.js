import CallToAction from "../components/CallToAction";
import IntegratedProgram from "../components/IntegratedProgram";
import ProgramFeatures from "../components/ProgramFeatures";
import WhyUs from "../components/WhyUs";
import Image from "next/image";

// export default function IntegratedProgramPage() {
//   return <IntegratedProgram />;
// }
export default function FirstPage() {
  return (
    <div className="Home">
      <IntegratedProgram />
      <WhyUs />
      <ProgramFeatures />
      <CallToAction />
      <section className="relative py-24 px-4 bg-[#FFEEF1] mt-[80px] mb-10">
        <div className="container mx-auto flex flex-col items-center justify-between">
          {/* Content (Title, Description, Button) */}
          <div className="text-center md:w-1/2 items-center">
            <h2 className="text-2xl font-semibold text-[#004AAB] mb-4 md:text-3xl">
              Have Specific Questions about the Process?
            </h2>
            <p className="text-gray-600 mb-6">
              You are welcome to fill out the Interest Form and send your
              questions.
            </p>
            <button className="bg-[#004AAB] hover:bg-[#FFEEF1] hover:text-[#004AAB] border-2 border-[#004AAB] text-white font-bold py-2 px-6 rounded">
              Contact Us
            </button>
          </div>

          {/* Image for Laptop View (Hidden on Mobile) */}
          <div className="md:absolute md:right-0 md:top-0  md:flex md:items-center md:justify-center hidden md:block">
            <Image
              src="/images/Character_2.png" // Correct image path
              alt="Doctor Illustration"
              width={290} // Set the width for desktop (or desired size)
              height={400} // Set the height for desktop (or desired size)
              className="object-contain md:w-[290px] md:h-[400px] md:mt-[-70px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
