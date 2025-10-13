import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Features from "@/components/index/Features";
import Form from "@/components/index/Form";
import Hero from "@/components/index/Hero";
import Management from "@/components/index/Management";
import Sale from "@/components/index/Sale";

import Abstract from "../public/images/index/abstract.svg";

export default function Home() {
  return (
    <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
      <div className="w-full sticky top-0 z-[100] backdrop-blur-md bg-gray_005/30">
        <section className="container mx-auto">
          <Navbar />
        </section>
      </div>
      <section className="container mx-auto">
        <Hero />
      </section>
      <div className="w-full bg-gray_006/50 z-20">
        <Features />
      </div>
      <section className="container mx-auto">
        <Sale />
      </section>
      <div className="w-full bg-gray_006/50">
        <section className="container mx-auto">
          <Management />
        </section>
      </div>
      <div
        className="w-full h-fit"
        style={{
          background: `url(${Abstract.src}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <section id="form" className="container mx-auto z-10">
          <Form />
        </section>
      </div>
      <section className="container mx-auto">
        <Footer />
      </section>
    </div>
  );
}
