"use client";

import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";

// function getRndInteger(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // const bannerName = "banner" + getRndInteger(1, 3) + ".json";

export default function BannerImg() {
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (container && container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../public/lottiefiles/banner3.json"),
      });
    }
  }, []);
  return (
    <div>
      <div ref={container}></div>
    </div>
  );
}
