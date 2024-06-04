import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold" style={{lineHeight:"70px"}}>
            Quality and Exceptional Prints
            <br />
            Every Time
          </h1>
          <p className="mb-5 max-w-xl mx-auto">
            Our state-of-the-art printing technology ensures crisp, vibrant
            prints that make an impact. Trust us for reliable, top-notch
            printing services.
          </p>
          <button className="btn border-none text-white bg-orange-600">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
