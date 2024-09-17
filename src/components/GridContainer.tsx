import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Grid";

import { gridItems } from "../../data";

const GridContainer = () => {
  return (
    <section id="project">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default GridContainer;
