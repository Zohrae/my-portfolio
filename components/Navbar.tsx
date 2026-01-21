"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-purple-700 via-pink-500 to-rose-500 shadow-xl text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* LOGO / TITLE */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wide hover:text-gray-100 transition-colors duration-300">
            Me
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative group text-white hover:text-gray-100 transition-colors duration-300"
              >
                {link.label}

                {/* animated underline */}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
