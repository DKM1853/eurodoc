// components/Footer.js
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B4F8C] text-white px-8 py-12">
      <div className="container mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">EURO DOC</h2>
            {/* <img src="/images/Euro Doc Logo.png" alt="Logo" className="h-12" /> */}

            <p className="text-sm text-gray-300">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <ul className="space-y-2">
              {["Integrations", "Help", "Intercom", "Customer"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              {[
                "Our Blog",
                "Customers",
                "Our Team",
                "Careers",
                "Integrations",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {[
                "Test Zoom",
                "Account",
                "Support Center",
                "Live Training",
                "Accessibility",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-sm text-gray-300 text-center">
            Copyright © FT PLANE 2022 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
