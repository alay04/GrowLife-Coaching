import Carousel from "../carousel";

const Hero = () => {
  return (
    <div className="h-screen">
      <Carousel
        tint="#24bf8020"
        delay={3000} // in milliseconds
        images={[
          "/home/hillstation.jpg",
          "/home/mountain.jpg",
          "/home/sepal.jpg",
          "/home/women-walking.jpg",
        ]}
        overlays={[
          <div className="">
            <h2 className="text-white text-4xl font-bold">Content 1</h2>
          </div>,
          <div className="">
            <h2 className="text-white text-4xl font-bold">Content 2</h2>
          </div>,
          <div className="">
            <h2 className="text-white text-4xl font-bold">Content 3</h2>
          </div>,
          <div className="">
            <h2 className="text-white text-4xl font-bold">Content 4</h2>
          </div>,
        ]}
        crops={["center", "center", "center", "left"]}
      />
      <div className="flex"></div>
    </div>
  );
};

export default Hero;
