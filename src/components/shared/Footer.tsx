import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-4">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-lg mx-auto max-w-screen-2xl w-full p-4 flex items-center justify-center">
        <span className="text-sm text-gray-900 text-center ">
          Made with 💗 by Srijan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
