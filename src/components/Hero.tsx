import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section>
      <div>
        <Spotlight className="-top-40 -left-10 h-screen" fill="red" />
      </div>
    </section>
  );
};

export default Hero;
