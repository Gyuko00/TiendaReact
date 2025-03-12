import React from "react";
import { useEffect } from "react";

const AboutUs = () => {

  useEffect(() => {
    const click = () => {
      console.log("click");
    };

    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("click", click);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
    </div>
  );
};

export default AboutUs;
