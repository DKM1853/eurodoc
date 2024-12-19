"use client"; // Mark this file as a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentRoute = usePathname(); // Get current route

  // Navbar links
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Integrated", url: "/Integrated" },
    { name: "Job", url: "/Job" },
    { name: "Contact us", url: "/Contact-us" },
    { name: "Blog", url: "/blog" },
  ];
  return (
    <footer className="bg-[#004AAB] text-white px-8 py-12 text-center">
      <div className="container mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 space-y-4">
            <h2 className="text-2xl font-bold text-red-500">EURO DOC</h2>
            <p className="text-sm text-gray-300">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <div className="flex justify-center ">
              <Link href="#" className="hover:text-gray-300">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_105_1662)">
                    <ellipse
                      cx="48"
                      cy="42.1104"
                      rx="21"
                      ry="20.9229"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M49.3318 50.0709V42.1503H51.7211L52.0379 39.3626H49.3318L49.3359 37.9672C49.3359 37.2401 49.4098 36.8507 50.5272 36.8507H52.0211V34.0625H49.6313C46.7606 34.0625 45.7504 35.4148 45.7504 37.6892V39.3628H43.9609V42.1507H45.7504V49.9586C46.4475 50.0884 47.1682 50.157 47.9062 50.157C48.3829 50.157 48.8591 50.1283 49.3318 50.0709Z"
                    fill="#17181C"
                  />
                  <defs>
                    <filter
                      id="filter0_d_105_1662"
                      x="0"
                      y="0.1875"
                      width="96"
                      height="95.8457"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="6" />
                      <feGaussianBlur stdDeviation="13.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0.17 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_105_1662"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_105_1662"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>

              <Link href="#" className="hover:text-gray-300">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_105_1668)">
                    <ellipse
                      cx="48"
                      cy="42.1104"
                      rx="21"
                      ry="20.9229"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M39.9238 35.9321C39.9238 35.3902 40.1148 34.9431 40.4969 34.5909C40.8789 34.2386 41.3755 34.0625 41.9867 34.0625C42.587 34.0625 43.0727 34.2359 43.4438 34.5827C43.8258 34.9404 44.0169 35.4064 44.0169 35.9808C44.0169 36.5011 43.8313 36.9346 43.4602 37.2814C43.0782 37.6391 42.5761 37.8179 41.954 37.8179H41.9376C41.3373 37.8179 40.8516 37.6391 40.4805 37.2814C40.1094 36.9237 39.9238 36.474 39.9238 35.9321ZM40.1367 50.157V39.2973H43.7713V50.157H40.1367ZM45.7851 50.157H49.4197V44.0931C49.4197 43.7138 49.4633 43.4211 49.5506 43.2152C49.7034 42.8467 49.9354 42.5351 50.2465 42.2804C50.5575 42.0258 50.9477 41.8984 51.4171 41.8984C52.6395 41.8984 53.2508 42.7167 53.2508 44.3532V50.157H56.8854V43.9305C56.8854 42.3265 56.5034 41.1099 55.7393 40.2808C54.9753 39.4517 53.9657 39.0372 52.7105 39.0372C51.3025 39.0372 50.2055 39.6387 49.4197 40.8417V40.8742H49.4033L49.4197 40.8417V39.2973H45.7851C45.8069 39.6441 45.8178 40.7225 45.8178 42.5324C45.8178 44.3424 45.8069 46.8839 45.7851 50.157Z"
                    fill="#17181C"
                  />
                  <defs>
                    <filter
                      id="filter0_d_105_1668"
                      x="0"
                      y="0.1875"
                      width="96"
                      height="95.8457"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="6" />
                      <feGaussianBlur stdDeviation="13.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0.17 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_105_1668"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_105_1668"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_105_1665)">
                    <ellipse
                      cx="48"
                      cy="42.1104"
                      rx="21"
                      ry="20.9229"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M58.5 35.9678C57.7191 36.291 56.8869 36.5051 56.0194 36.6091C56.9119 36.1065 57.5931 35.3166 57.9133 34.3646C57.0812 34.8326 56.1624 35.1631 55.1833 35.3476C54.3932 34.554 53.2671 34.0625 52.0386 34.0625C49.6551 34.0625 47.7362 35.8874 47.7362 38.1245C47.7362 38.4464 47.7651 38.7559 47.8359 39.0506C44.2568 38.8859 41.0897 37.2678 38.9621 34.8028C38.5907 35.4107 38.3728 36.1065 38.3728 36.8555C38.3728 38.2619 39.1406 39.5086 40.2851 40.2304C39.5934 40.218 38.9149 40.0286 38.34 39.7302C38.34 39.7426 38.34 39.7587 38.34 39.7748C38.34 41.7482 39.8323 43.3874 41.7892 43.765C41.4388 43.8554 41.0569 43.8987 40.6605 43.8987C40.3849 43.8987 40.1066 43.8839 39.8454 43.8294C40.4032 45.4376 41.9861 46.6199 43.8683 46.6583C42.4035 47.7391 40.5437 48.3903 38.5303 48.3903C38.1773 48.3903 37.8386 48.3755 37.5 48.3346C39.4071 49.4946 41.6672 50.157 44.1045 50.157C52.0267 50.157 56.358 43.9668 56.358 38.6011C56.358 38.4216 56.3514 38.2483 56.3423 38.0762C57.1967 37.5042 57.9146 36.7899 58.5 35.9678Z"
                    fill="#17181C"
                  />
                  <defs>
                    <filter
                      id="filter0_d_105_1665"
                      x="0"
                      y="0.1875"
                      width="96"
                      height="95.8457"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="6" />
                      <feGaussianBlur stdDeviation="13.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0 0.192031 0 0 0 0.17 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_105_1665"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_105_1665"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <address className="text-sm not-italic text-gray-300 space-y-2">
              <p>123 Main Street</p>
              <p>City, State, ZIP</p>
              <p>Country</p>
            </address>
          </div>

          {/* Useful Links Section */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              {navLinks.map(({ name, url }) => (
                <li key={name}>
                  <Link
                    href={url}
                    className={`text-sm ${
                      currentRoute === url
                        ? "text-[#DC143B] font-bold" // Highlight active page
                        : "hover:text-gray-300"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div>
              <p>Phone: +1 123-456-7890</p>
              <p>Email: info@eurodoc.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-300">
            Copyright © EURO DOC 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
