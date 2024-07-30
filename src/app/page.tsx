import Head from "next/head";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/page";
import Homebody from "./components/homebody/page";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <h1>Hello World</h1> */}
      <Homebody />
    </>
  );
}
