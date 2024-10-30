import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-section container mx-auto flex items-center py-16">
      {/* Left Column: Smaller Image (1/3 of width) */}
      <div className="w-1/3">
        <img
          src="./images/andrew_logo.png"
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Column: Text Content in Grid Layout */}
      <div className="w-2/3 grid grid-cols-2 gap-6 ml-8">
        {/* Row 1: Full Width Spanning Two Columns */}
        <div className="col-span-2 p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-white leading-tight">Welcome to Our Platform</h1>
          <p className="text-gray-400 mt-4 text-lg">
            We build AI applications that accelerate your business growth.
          </p>
        </div>

        {/* Row 2: Left Column */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
          <h2 className="text-lg font-semibold text-orange-400">Feature 1</h2>
          <p className="text-gray-400 mt-2">Efficient solutions for complex problems.</p>
        </div>

        {/* Row 2: Right Column */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
          <h2 className="text-lg font-semibold text-orange-400">Feature 2</h2>
          <p className="text-gray-400 mt-2">Seamless integration with your workflow.</p>
        </div>

        {/* Row 3: Left Column */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
          <h2 className="text-lg font-semibold text-orange-400">Feature 3</h2>
          <p className="text-gray-400 mt-2">Advanced analytics to drive insights.</p>
        </div>

        {/* Row 3: Right Column */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
          <h2 className="text-lg font-semibold text-orange-400">Feature 4</h2>
          <p className="text-gray-400 mt-2">Customizable tools tailored to your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
