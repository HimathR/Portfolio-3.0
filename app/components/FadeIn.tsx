"use client";

import React, { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 200);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        rendered ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
