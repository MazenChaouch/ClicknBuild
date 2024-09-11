import { Footer } from "./_componants/footer";
import { Navbar } from "./_componants/navbar";
import { Section1 } from "./_componants/home/section1";
import { Section2 } from "./_componants/home/section2";
import { Section3 } from "./_componants/home/section3";
import { Section4 } from "./_componants/home/section4";
import { Section5 } from "./_componants/home/section5";
import { Section6 } from "./_componants/home/section6";
import { Section7 } from "./_componants/home/section7";
import { Section8 } from "./_componants/home/section8";
import { Section9 } from "./_componants/home/section9";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </main>
  );
}
