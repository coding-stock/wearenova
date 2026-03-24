import Image from "next/image";
import Navigation from "./Components/header/navigation";
import Hero from "./Components/header/hero";
import Expertise from "./Components/expertise/expertise";
export default function Home() {
  return (
    <>
  <Navigation/>
  <Hero/>
  <Expertise/>
  </>
);
}
