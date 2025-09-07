import React, { useRef, useState, useEffect } from "react";
import "../css/intersection-use.css";
import useInView from "../hooks/use-intersection";

function IntersectionUse() {
  const elemRef = useRef(null);
  const { isIntersection } = useInView(elemRef);

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <header className="app-header">
        <h1>📚 Student Dashboard</h1>
        <p className={`status ${isIntersection ? "in" : "out"}`}>
          {isIntersection
            ? "✅ our-elem is in view"
            : "❌ our-elem is not in view"}
        </p>
      </header>

      {/* Content */}
      <div className="content">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((elem) => (
          <div key={`top-${elem}`} className="id-wrapper">
            <p>{`Student Id : ${elem}`}</p>
          </div>
        ))}

        {/* Special Element */}
        <div ref={elemRef} className="our-elem">
          🎯 This is our special element
        </div>

        {Array.from({ length: 100 }, (_, i) => i + 1).map((elem) => (
          <div key={`bottom-${elem}`} className="id-wrapper">
            <p>{`Student Id : ${elem}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntersectionUse;
