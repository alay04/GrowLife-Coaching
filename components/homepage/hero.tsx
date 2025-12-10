"use client";

import Carousel from "../carousel";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";

const Hero = () => {
  return (
    <div className="h-screen">
      <Carousel
        tint="rgba(77, 15, 0, .4)"
        delay={3000} // in milliseconds
        images={[
          "/home/home.jpg",
          "/home/self-confidence.jpg",
          "/home/transition.jpg",
          "/home/career-direction.jpg",
          "/home/equality-diversity.jpg",
          "/home/why-choose-us.jpg",
        ]}
        overlays={[
          <Slide1 />,
          <Slide2 />,
          <Slide3 />,
          <Slide4 />,
          <Slide5 />,
          <Slide6 />,
        ]}
        crops={["left", "center", "center", "left"]}
      />
      <div className="flex"></div>
    </div>
  );
};

export default Hero;
