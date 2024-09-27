import Approach from "@/components/Approach";
import Education from "@/components/Education";
import Exprience from "@/components/Exprience";
import Footer from "@/components/Footer";
import GridContainer from "@/components/GridContainer";
import Hero from "@/components/Hero";

import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <GridContainer />
      <RecentProjects />
      <Education />
      <Exprience />
      <Approach />
      <Footer />
    </section>
  );
}
