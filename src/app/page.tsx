import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

import Image from "next/image";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <section>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Hero />
    </section>
  );
}
