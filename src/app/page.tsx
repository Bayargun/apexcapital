import Details from "./components/details";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HowToTrade from "./components/howtotrade";
import Navbar from "./components/navbar";
import Scroll from "./components/scroll";
import Why from "./components/why";

export default function Home() {
  return (
    <div className="bg-white">
      <Scroll />
      <Navbar />
      <Hero />
      <Details />
      <Why />
      <HowToTrade />
      <Footer />
    </div>
  );
}
