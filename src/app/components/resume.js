"use client";
import React from "react";

function Resume() {
  return (
    <>
      <button
        className="bg-secondary text-white py-2 px-4 rounded-md font-semibold hover:bg-secondary-dark transition-all duration-300 my-2 fade-in"
        onClick={() => {
          window.open("/EN - CV - Matheus Melo.pdf", "_blank");
        }}
      >
        Currículo em PDF
      </button>
    </>
  );
}

export default Resume;
