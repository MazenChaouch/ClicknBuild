import { Navbar } from "@/app/_componants/navbar";
import Image from "next/image";
import bg from "@/app/assets/pricing/bg-pricing.png";
import { Details } from "@/app/_componants/pricing/details";
import { Cards } from "@/app/_componants/pricing/cards";
import { Footer } from "@/app/_componants/footer";
import { Faq } from "@/app/_componants/faq";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-4 py-48">
        <Image src={bg} alt="bg" className="absolute -z-10 h-full" />
        <p className="text-3xl font-semibold text-white">
          Unlock Your Web Potential
        </p>
        <p className="text-9xl font-bold text-white">Pricing Plans</p>
        <p className="text-white">
          Choose the perfect plan to bring your digital vision to life. Seamless
          design, powerful features, unbeatable value.
        </p>
      </div>
      <Cards />
      <div className="container">
        <Details />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Page;
