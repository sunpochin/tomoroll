// src/app/HomeSection.tsx
import React from 'react';

const HomeSection = () => {
  const circles = Array.from({ length: 10 }).map((_, index) => {
    // randomly generate the position of the circle
    const left = Math.random() * 100; // random left position
    const top = Math.random() * 100; // random top position

    return (
      <div
        key={index}
        className="circle"
        style={{ left: `${left}vw`, top: `${top}vh` }} // use vw and vh to set position
      />
    );
  });

  return (
    <section id="home" className="
    min-h-screen min-w-screen bg-custom-pink
    relative">
      <h1>Home</h1>
      <img src="/images/tomoroll.png" 
        alt="tomoroll" 
        className="w-1/3 absolute top-0 left-20" />
      <div className="flex flex-col items-center justify-center mt-20">
        <img src="/images/whisky-1920.jpg" alt="home-image" />
        <div className="font-custom-brown text-center text-4xl w-1/2 h-screen">
          Small ideas we grasp from a daydream of an elegant life
        </div>
      </div>
      {circles}
    </section>
  );
};

export default HomeSection;
