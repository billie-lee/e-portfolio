import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex -mx-6">
        <a href="#About_Me" className="mx-3 hover:opacity-80 duration-150">
          About Me
        </a>
        <a href="#About_Me" className="mx-3 hover:opacity-80 duration-150">
          Reflection
        </a>
        <a href="#About_Me" className="mx-3 hover:opacity-80 duration-150">
          Skills
        </a>
        <a href="#About_Me" className="mx-3 hover:opacity-80 duration-150">
          Deliverable
        </a>
        <a href="#About_Me" className="mx-3 hover:opacity-80 duration-150">
          Additional Artifacts
        </a>
      </div>
    </footer>
  );
};

export default Footer;
