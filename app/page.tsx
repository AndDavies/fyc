import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

const Page: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Projects</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-8">
            <ProjectCard
              title="Personal Website"
              description="Designed and developed a personal website to showcase projects and notes, emphasizing efficient and responsive design with Tailwind CSS and Next.js."
              imageUrl="/images/andrew_placeHolder.jpg"
              tags={['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']}
              githubUrl="https://github.com/your-repo-url"
              liveDemoUrl="https://your-live-demo-url.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
