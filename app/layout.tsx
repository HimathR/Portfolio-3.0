"use client";

import { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Loader from "./components/Loader";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";
export const revalidate = 0;

const metadata = {
  title: "Himath's Portfolio",
  description: "Himath Ratnayake Software Engineering Portfolio",
};

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"<GTM ID>")`,
          }}
        />
      </Head>

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
