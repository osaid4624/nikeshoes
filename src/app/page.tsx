import Navbar from "@/components/Navbar";
import Header from "@/components/Header"; // Correct import
import Hero from "@/components/Hero";
import Cards1 from "@/components/Cards1";
import Banner2 from "@/components/Banner2";
import Banner3 from "@/components/Banner3";
import BottomCards from "@/components/BottomCards";
import Catogeries from "@/components/Catogeroise";
import Footer from "@/components/Footer";
import Cards2 from "@/components/Cards2";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero/>
      <Cards2/>
      <Banner2/>
      <Cards1/>
      <Banner3/>
      <BottomCards/>
      <Catogeries/>
      <Footer/>
      <main style={{ padding: "2rem" }}>
      </main>
    </div>
  );
}
