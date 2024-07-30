import Head from "next/head";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/page";
import Homebody from "./components/homebody/page";
import Footer from "./components/footer/page";
import Login from "./login/page";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
