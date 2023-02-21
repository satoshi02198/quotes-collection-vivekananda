import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-orange-400 to-orange-300 text-center p-3">
      This site is created by{" "}
      <a
        href="https://satoshi-okazaki.vercel.app/"
        className="inline border-b-2 border-green-900"
        target="_blank"
        rel="noreferrer"
      >
        Satoshi.O
      </a>{" "}
      please tell me something wrong in this site
    </div>
  );
};

export default Footer;
