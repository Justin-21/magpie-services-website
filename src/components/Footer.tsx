import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-accent h-full max-h-1/2 flex flex-col items-center gap-16 pt-16 overflow-clip mt-16 text-background">
      <div className="flex items-start justify-between w-full max-w-7xl">
        <div>Got a query?</div>
        <div>Email</div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="translate-y-2/6 -mt-32">
        <span className="text-[13vw] font-medium">Magpie Services</span>
      </div>
    </div>
  );
};

export default Footer;
