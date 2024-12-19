import Image from "next/image";
import styles from "./global.css";

const RecruitmentServices = () => {
  return (
    <section className="relative py-2 md:py-10 px-4 md:px-12 bg-white mt-[5px] md:mt-[20px]">
      {/* Section Heading */}
      {/* <h2 className="text-black font-bold text-[24px] md:text-[32px] mb-8 text-left">
        Our Recruitment Services
      </h2> */}

      <h2 className="text-2xl md:text-4xl sm:text-3xl font-bold flex items-center text-[#004AAB] md:ms-8 mb-8 mt-10 md:mt-2">
        Our Recruitment Services
        {/* Needle Border Effect */}
        <div className="absolute mt-14 mx-auto w-fit md:block hidden">
          <div className="flex items-center justify-center">
            {/* Left Circular Part */}
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            {/* Straight Line */}
            <div className="w-[180px] h-1 bg-red-500"></div>
          </div>
        </div>
      </h2>

      {/* Main Layout */}
      <div className="relative flex flex-col items-center gap-12">
        {/* Row 1: Card 1 */}
        <div className="flex flex-col md:flex-row items-start gap-8 w-full md:w-3/4">
          <div className="p-6 rounded-lg border border-[#004AAB] shadow-lg w-full md:w-1/2">
            <div className="flex flex-col gap-4 mb-4">
              <div
                className="bg-[#E6F5FC] rounded-full"
                style={{ width: "60px", height: "60px" }}
              >
                <Image
                  className="mb-4 ms-4"
                  src="/images/career-consult.png"
                  alt="Career Consultation"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[#004AAB] font-bold text-lg">
                1. Personalized Career Consultation
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our experienced consultants will assess your qualifications,
              career goals, and preferences to provide personalized advice and
              guidance.
            </p>
          </div>

          {/* Image - Right */}
          <div className="w-full md:w-1/2 items-center justify-center md:-mt-16 hidden md:flex image-table-set">
            <Image
              src="/images/job_doctor.png"
              alt="Doctors Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="absolute left-[49%] -translate-x-3/20 top-[21%] hidden md:block right-arrow-set">
          <svg
            width="121"
            height="99"
            viewBox="0 0 121 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107.168 98.2669L103.582 81.3217L120.05 86.6884L107.168 98.2669ZM0.423882 24.7228C1.04824 24.1325 1.67382 23.5538 2.30051 22.9865L4.31368 25.2107C3.70326 25.7633 3.09364 26.3272 2.48495 26.9027L0.423882 24.7228ZM6.0731 19.7205C7.39743 18.6253 8.72569 17.58 10.0568 16.5838L11.8543 18.9857C10.5627 19.9523 9.27257 20.9675 7.98498 22.0323L6.0731 19.7205ZM14.1658 13.6694C15.5784 12.7219 16.9929 11.8284 18.4082 10.9879L19.94 13.5674C18.5727 14.3793 17.2047 15.2434 15.837 16.1608L14.1658 13.6694ZM22.8301 8.53407C24.3559 7.74611 25.881 7.0186 27.4039 6.35034L28.6094 9.09751C27.1452 9.73997 25.6772 10.4402 24.2067 11.1996L22.8301 8.53407ZM32.1029 4.4721C33.7135 3.89085 35.3197 3.37505 36.9197 2.92326L37.7349 5.81036C36.2043 6.24256 34.6659 6.73653 33.1213 7.29395L32.1029 4.4721ZM41.8406 1.72954C43.5195 1.389 45.1891 1.11866 46.8469 0.916744L47.2096 3.89474C45.6309 4.08701 44.0393 4.34467 42.4369 4.66968L41.8406 1.72954ZM51.922 0.509047C53.6359 0.442856 55.334 0.450225 57.0137 0.529056L56.873 3.52576C55.2793 3.45096 53.6667 3.4439 52.0378 3.50681L51.922 0.509047ZM62.0857 0.990116C63.7805 1.21987 65.4524 1.52368 67.0983 1.89916L66.4311 4.82402C64.8725 4.46848 63.2889 4.18066 61.6827 3.96292L62.0857 0.990116ZM72.0097 3.25581C73.6305 3.78366 75.221 4.38333 76.7781 5.0522L75.594 7.80865C74.1202 7.17555 72.6148 6.60797 71.0807 6.10835L72.0097 3.25581ZM81.3636 7.27326C82.8569 8.0819 84.3132 8.9576 85.7294 9.89768L84.0702 12.3971C82.7284 11.5064 81.349 10.677 79.9351 9.91131L81.3636 7.27326ZM89.8428 12.899C91.1641 13.9554 92.4428 15.0723 93.676 16.2471L91.6067 18.4192C90.4359 17.3039 89.2225 16.2441 87.9694 15.2422L89.8428 12.899ZM97.2063 19.9094C98.3239 21.1712 99.3948 22.4861 100.416 23.8516L98.0138 25.6485C97.0416 24.3487 96.0229 23.0979 94.9605 21.8984L97.2063 19.9094ZM103.293 28.0397C104.188 29.4618 105.033 30.9293 105.827 32.4399L103.172 33.8354C102.414 32.3933 101.607 30.9934 100.754 29.6379L103.293 28.0397ZM108.016 37.0197C108.682 38.5585 109.296 40.1354 109.858 41.7485L107.025 42.735C106.487 41.1906 105.899 39.6818 105.263 38.2107L108.016 37.0197ZM111.355 46.5958C111.791 48.2055 112.176 49.8463 112.509 51.5166L109.567 52.1025C109.247 50.4983 108.877 48.9235 108.459 47.38L111.355 46.5958ZM113.332 56.5008C113.549 58.1515 113.717 59.8275 113.834 61.5273L110.84 61.7319C110.729 60.0943 110.567 58.4809 110.358 56.8931L113.332 56.5008ZM114.025 66.5785C114.038 68.2459 114.002 69.9335 113.916 71.6401L110.92 71.4893C111.003 69.8402 111.037 68.2107 111.025 66.6019L114.025 66.5785ZM113.523 76.6599C113.348 78.3058 113.127 79.9674 112.86 81.6435L109.897 81.1699C110.157 79.5455 110.371 77.9363 110.539 76.3436L113.523 76.6599ZM111.937 86.5998C111.591 88.2283 111.201 89.8691 110.765 91.5212L107.864 90.7562C108.288 89.1506 108.666 87.5571 109.002 85.9766L111.937 86.5998Z"
              fill="url(#paint0_radial_105_3380)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_105_3380"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-1.40278 63.3319) rotate(-13.9513) scale(110.883 156.801)"
              >
                <stop stopColor="#5278C7" />
                <stop offset="1" stopColor="#233F78" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Row 2: Card 2 */}
        <div className="flex justify-end w-full md:w-3/4 -mt-[2%] second-container-set">
          <div className="p-6 border border-[#004AAB] rounded-lg shadow-lg w-full md:w-1/2">
            <div className="flex flex-col gap-4 mb-4">
              <div
                className="bg-[#E6F5FC] rounded-full"
                style={{ width: "60px", height: "60px" }}
              >
                <Image
                  className="mb-4 ms-4"
                  src="/images/career-consult.png"
                  alt="Career Consultation"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[#004AAB] font-bold text-lg">
                2. Application Support
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our team will assist you in preparing and submitting your
              application materials, ensuring they meet German standards and
              requirements.
            </p>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="absolute left-[51%] -translate-x-1/2 top-[57%] right-[35%] hidden md:block left-arrow-set">
          <svg
            width="92"
            height="118"
            viewBox="0 0 92 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.1615 117.736L23.9567 100.934L11.5078 112.977L28.1615 117.736ZM91.8631 4.84159C91.0432 4.58471 90.2272 4.33879 89.4153 4.10369L88.5809 6.98532C89.3717 7.21432 90.1669 7.45396 90.9663 7.70439L91.8631 4.84159ZM84.5928 2.82199C82.9224 2.41817 81.2703 2.06095 79.6372 1.74914L79.0746 4.69591C80.6592 4.99845 82.2638 5.34538 83.8878 5.73799L84.5928 2.82199ZM74.6664 0.930899C72.9815 0.698518 71.3184 0.51554 69.6779 0.380565L69.4319 3.37046C71.0168 3.50086 72.6252 3.67777 74.2565 3.90277L74.6664 0.930899ZM64.6278 0.113504C62.9111 0.0741265 61.2214 0.0888145 59.5596 0.155808L59.6805 3.15337C61.2781 3.08897 62.9045 3.07477 64.559 3.11272L64.6278 0.113504ZM54.5128 0.527561C52.8105 0.711162 51.1407 0.951677 49.5046 1.24698L50.0375 4.19927C51.6027 3.91678 53.202 3.68634 54.8345 3.51026L54.5128 0.527561ZM44.5585 2.33127C42.9001 2.7612 41.281 3.25009 39.7025 3.79537L40.6819 6.63097C42.1852 6.11171 43.7287 5.64558 45.3113 5.23526L44.5585 2.33127ZM34.9623 5.6537C33.3928 6.34553 31.8698 7.09656 30.3947 7.90373L31.8348 10.5355C33.2345 9.7696 34.6807 9.05636 36.1724 8.39883L34.9623 5.6537ZM26.0381 10.5416C24.6155 11.491 23.2461 12.497 21.9313 13.556L23.8132 15.8923C25.0581 14.8895 26.3554 13.9366 27.7035 13.0368L26.0381 10.5416ZM18.1117 16.9283C16.8864 18.1133 15.7197 19.3495 14.6134 20.6333L16.8859 22.5917C17.9331 21.3766 19.0373 20.2065 20.1972 19.0849L18.1117 16.9283ZM11.4656 24.6397C10.4779 26.0211 9.55286 27.4466 8.69212 28.9123L11.2791 30.4315C12.0946 29.0427 12.9708 27.6925 13.906 26.3845L11.4656 24.6397ZM6.31074 33.4131C5.58624 34.9418 4.92655 36.5063 4.33318 38.1028L7.14524 39.1479C7.70859 37.6322 8.3346 36.1477 9.02169 34.6979L6.31074 33.4131ZM2.76554 42.9419C2.31423 44.566 1.92817 46.2172 1.60879 47.8923L4.5557 48.4542C4.85972 46.8597 5.22699 45.289 5.65601 43.7452L2.76554 42.9419ZM0.859414 52.9175C0.678237 54.588 0.561379 56.2777 0.51014 57.9835L3.50879 58.0736C3.5577 56.4452 3.66921 54.8334 3.84193 53.241L0.859414 52.9175ZM0.550576 63.0593C0.626927 64.7341 0.765661 66.4209 0.967921 68.1169L3.94681 67.7617C3.75315 66.1378 3.62046 64.5239 3.54746 62.9227L0.550576 63.0593ZM1.74725 73.13C2.06111 74.7678 2.43419 76.4115 2.86749 78.0585L5.76878 77.2953C5.35262 75.7134 4.99462 74.136 4.69363 72.5654L1.74725 73.13ZM4.31273 82.899C4.84066 84.4781 5.42454 86.0581 6.06524 87.6367L8.84503 86.5086C8.22779 84.9877 7.66576 83.4667 7.15794 81.9478L4.31273 82.899ZM8.10782 92.2606C8.82709 93.7649 9.599 95.266 10.4243 96.7622L13.0512 95.3132C12.2537 93.8674 11.5083 92.4179 10.8144 90.9665L8.10782 92.2606ZM12.9783 101.102C13.8567 102.504 14.7834 103.901 15.759 105.29L18.214 103.566C17.2684 102.22 16.371 100.867 15.521 99.5095L12.9783 101.102ZM18.7612 109.34C19.7859 110.652 20.8559 111.956 21.9718 113.25L24.2437 111.291C23.1592 110.033 22.1201 108.767 21.1256 107.494L18.7612 109.34Z"
              fill="url(#paint0_radial_105_3383)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_105_3383"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(110.43 38.7424) rotate(167.951) scale(110.883 156.801)"
              >
                <stop stopColor="#5278C7" />
                <stop offset="1" stopColor="#233F78" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Row 3: Card 3 */}
        <div className="flex justify-start w-full md:w-3/4 mt-[1%]">
          <div className="p-6 border border-[#004AAB] rounded-lg shadow-lg w-full md:w-1/2">
            <div className="flex flex-col gap-4 mb-4">
              <div
                className="bg-[#E6F5FC] rounded-full"
                style={{ width: "60px", height: "60px" }}
              >
                <Image
                  className="mb-4 ms-4"
                  src="/images/career-consult.png"
                  alt="Career Consultation"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[#004AAB] font-bold text-lg">
                3. Interview Training
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our team will assist you in preparing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentServices;
