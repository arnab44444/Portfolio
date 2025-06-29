import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center text-white bg-gradient-to-r from-cyan-600 to-cyan-700 shadow p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Arnab Biswas
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
