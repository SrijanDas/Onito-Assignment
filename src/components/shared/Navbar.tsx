import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <div className="h-14 w-32 relative">
            <Image
              src="/onito-logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="block w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0 border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 mt-0 border-0">
            <li>
              <Link
                href="/"
                className="block text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
