"use client";

import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";

export default function ContactImg() {
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (container && container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./contact.json"),
      });
    }
  }, []);
  return (
    <div>
      <div ref={container}></div>
    </div>
  );
}
