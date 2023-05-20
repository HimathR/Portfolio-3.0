import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Home";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Homepage />
      <Footer />{" "}
    </>
  );
}
