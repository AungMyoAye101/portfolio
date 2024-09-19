import Approach from "@/components/Approach";
import Exprience from "@/components/Exprience";
import Footer from "@/components/Footer";
import GridContainer from "@/components/GridContainer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <Hero />
      <GridContainer />
      <RecentProjects />
      <Exprience />
      <Approach />
      <Footer />
    </section>
  );
}
