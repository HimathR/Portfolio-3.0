"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      height="100"
      width="100"
      src="/images/logo.svg"
      className="object-fill xl:min-w-[160px] xl:min-h-[160px]"
    />
  );
};

export default Logo;
