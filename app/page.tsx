import Image from "next/image";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Home";

const metadata = {
  title: "Himath's Portfolio",
  description: "Himath Ratnayake Software Engineering Portfolio",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
