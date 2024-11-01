// Example in a Next.js component
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen text-neutral-300 flex items-start justify-center ">
      <div className="container mx-auto p-8 max-w-4xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0 w-full max-w-3xl ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">I'm Andrew Davies. I live in Paris, France.</h1>
          <p className="mb-6">
            As a semi-retired naval engineer and a passionate fitness enthusiast, I bring the same drive and attention to detail from my engineering career into my work with web development and app projects. I’m currently developing a range of innovative apps that fuse my love for fitness and technology.
          </p>
          <p className=" mb-6">
            My experience in the naval field taught me how to solve complex problems under pressure and apply strategic thinking to every aspect of a project. I’m now channeling that expertise into building apps for early retirement, fitness, and investment tracking.
          </p>
          <p className="mb-6">
            When I’m not coding or working on my projects, you’ll find me running, doing CrossFit, or exploring new ways to use technology to improve daily life. I’m inspired by the challenges and opportunities that lie at the intersection of fitness and tech.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-none md:ml-12 ">
          <div className="rounded-md overflow-hidden mb-6">
            <Image 
                src="/images/andrew_profile.jpg" 
                alt="Andrew Davies"
                width={200}
                height={200}
            />
          </div>
          <div className="space-y-4">
            <a href="https://github.com/your-github" className="flex items-center space-x-2 hover:text-gray-400">
              <i className="fab fa-github"></i>
              <span>Follow on GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" className="flex items-center space-x-2 hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
              <span>Connect on LinkedIn</span>
            </a>
            <a href="mailto:your-email@example.com" className="flex items-center space-x-2 hover:text-gray-400">
              <i className="fas fa-envelope"></i>
              <span>andrew.davies@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
