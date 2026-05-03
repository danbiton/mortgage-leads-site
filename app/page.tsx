import Hero from "./components/Hero";
// import CTA from "./components/Cta";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: "ייעוץ משכנתאות מקצועי | [שם היועץ]",
  description:
    "ייעוץ משכנתאות אישי ומקצועי — ריביות הכי טובות, ליווי מלא עד לחתימה. השאירו פרטים לייעוץ חינם.",
  keywords: "ייעוץ משכנתאות, משכנתא, יועץ משכנתאות, מחשבון משכנתא, מחזור משכנתא",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Services, Steps, Calculator teaser, Testimonials — נוסיף בהמשך */}
      {/* <CTA /> */}
      <Services />
      <HowItWorks />
      <Testimonials />
    </>
  );
}