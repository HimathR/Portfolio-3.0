"use client";

import { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <head></head>

      <body>
        {isLoading && isHome ? (
          <Loader />
        ) : (
          <>
            <ClientOnly>
              <Navbar />
            </ClientOnly>
            {children}
            <ClientOnly>
              <Footer />{" "}
            </ClientOnly>
          </>
        )}
      </body>
    </html>
  );
}
