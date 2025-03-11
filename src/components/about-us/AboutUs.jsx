import React from "react";
import { useState, useEffect } from "react";

const AboutUs = () => {
    
  const click = () => {
    console.log("click");
  };

  useEffect(() => {
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
