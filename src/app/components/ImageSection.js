import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="bg-white mt-[20%] md:mt-[9%]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12">
          {/* Space left on large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Image Section */}
          <div className="col-span-12 lg:col-span-8 flex justify-center">
            <Image
              src="/images/job_public.png" // Replace with your image path
              alt="Example Image"
              width={800} // Adjust image dimensions as needed
              height={400}
              className="object-cover"
            />
          </div>

          {/* Space right on large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
