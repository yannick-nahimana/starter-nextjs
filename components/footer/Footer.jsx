import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className="mt-auto">© copyright {year}. All rights reserved</div>;
};

export default Footer;
