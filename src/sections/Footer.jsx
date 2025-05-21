import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Jagannathcoding. All rights reserved.
      </p>
      <p>
        Designed & built with ❤️ by Jagannathcoding.
      </p>
    </footer>
  );
};

export default Footer;
