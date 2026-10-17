import About from "@/components/About";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return <main id="main-content"><Hero/><Services order={["glass-balustrades", "pool-fencing", "shower-boxes", "custom-stairs-glass", "handrails"]}/><WhyChooseUs/><Gallery/><About/><CTA/></main>;
}
