import Image from "next/image";

export default function Home() {
  return (
    // Hero Section Container
    <div className="hero-section container mx-auto flex items-center py-16">
      <div className="w-full md:w-1/2">
        <img src="/images/andrew_logo.png" alt="Hero Image" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      {/* <!-- Right Column: Text Content in Grid Layout --> */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 ml-8">
        {/* <!-- Row 1: Full Width Spanning Two Columns --> */}
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-white">Welcome to Our Platform</h1>
          <p className="text-gray-300 mt-2">We build AI applications that accelerate your business growth.</p>
        </div>

        {/* <!-- Row 2: Left Column --> */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-customOrange">Feature 1</h2>
          <p className="text-gray-300">Brief description of feature 1.</p>
        </div>

        {/* <!-- Row 2: Right Column --> */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-customOrange">Feature 2</h2>
          <p className="text-gray-300">Brief description of feature 2.</p>
        </div>

        {/* <!-- Row 3: Left Column --> */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-customOrange">Feature 3</h2>
          <p className="text-gray-300">Brief description of feature 3.</p>
        </div>

        {/* <!-- Row 3: Right Column --> */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-customOrange">Feature 4</h2>
          <p className="text-gray-300">Brief description of feature 4.</p>
        </div>
      </div>
    </div>
  );
}
