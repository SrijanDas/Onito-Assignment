import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-200">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center ">
          Made with 💗 by Srijan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
