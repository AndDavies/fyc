import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative text-white py-20 px-8 overflow-hidden">
      {/* Pseudo-element to handle background image with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/andrew_logo.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
          opacity: 0.4, // Set your desired opacity for the background image
          zIndex: 0,
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl ml-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Mastering Complexity, Creating Simplicity
        </h1>
        <p className="text-gray-300 mt-6 pr-32 text-base">
          With a foundation in naval engineering and a passion for digital innovation, I transform complex ideas into
          streamlined, impactful solutions. I’m merging years of technical expertise with a commitment to fitness and
          well-being, building tools that connect technology, health, and meaningful experiences. Join me as I explore
          the future of creation and collaboration, where technology and an active lifestyle go hand in hand.
        </p>
      </div>
    </div>
  );
};

export default Hero;
