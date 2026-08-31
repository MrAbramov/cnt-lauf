import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TopOffset from "@/components/TopOffset";

export default function Home() {
  return (
    <>
      <TopOffset />
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Services />
        <Process />
        <Pricing />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
