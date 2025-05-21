import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <aside>
        <p className="font-semibold">
          &copy; {new Date().getFullYear()} Jagannathcoding. All rights reserved.
        </p>
        <p>Designed & built with ❤️ by Jagannath Coding.</p>
      </aside>
    </footer>
  );
};

export default Footer;
