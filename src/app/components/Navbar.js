/** @jsxImportSource react */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // `usePathname` replaces `useRouter`
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  // Get the current path using usePathname
  const currentRoute = usePathname();

  useEffect(() => {
    // Map routes to page names
    const matchingPage = {
      "/": "Home",
      "/Integrated": "Integrated",
      "/contact": "Contact us",
      "/blog": "Blog",
    }[currentRoute];

    if (matchingPage) {
      setActivePage(matchingPage);
    }
  }, [currentRoute]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-30 bg-white shadow-md">
      {/* Top Bar (Logo Centered) */}
      <div className="hidden lg:flex justify-center items-center py-2 border-b border-gray-200">
        <Link href="/" passHref>
          <Image
            src="/images/Euro Doc Logo.png"
            alt="Logo"
            width={300} // Corresponds to h-12 (12 * 4 = 48px)
            height={150} // Same height since it's likely square
            className="h-12 cursor-pointer" // Preserve Tailwind classes for styling
          />
        </Link>
      </div>

      {/* Bottom Bar (Navigation Links for Desktop) */}
      <div className="hidden lg:flex justify-center items-center py-2">
        {[
          // Desktop navigation links
          { name: "Home", url: "/" },
          { name: "Integrated", url: "/Integrated" },
          { name: "Contact us", url: "/contact" },
          { name: "Blog", url: "/blog" },
        ].map(({ name, url }) => (
          <Link key={name} href={url}>
            <span
              className={`mx-4 text-md font-medium relative cursor-pointer ${
                activePage === name
                  ? "text-[#DC143B]"
                  : "text-gray-700 hover:text-[#DC143B]"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile View: Single Bar with Logo and Toggle Button */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Image
          src="/images/Euro Doc Logo.png" // Correct image path
          alt="Logo"
          width={40} // Width based on your desired size
          height={40} // Height based on your desired size
          className="h-10" // Applying the height class to maintain the 10 unit height
        />{" "}
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-blue shadow-lg">
          {[
            // Mobile navigation links
            { name: "Home", url: "/" },
            { name: "Integrated", url: "/Integrated" },
            { name: "Contact Us", url: "/contact-us" },
            { name: "Blog", url: "/blog" },
          ].map(({ name, url }) => (
            <Link key={name} href={url} passHref>
              <div
                onClick={() => {
                  setActivePage(name);
                  setIsOpen(false); // Close dropdown after click
                }}
                className={`block py-2 px-4 text-center cursor-pointer ${
                  activePage === name
                    ? "text-[#0077B6] bg-gray-100 rounded border-2 border-[#0077B6]"
                    : "hover:text-[#0077B6] hover:bg-[#f0f8ff] hover:rounded"
                }`}
              >
                {name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
