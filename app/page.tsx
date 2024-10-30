import Image from "next/image";
import Hero from "./components/Hero";
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    // Hero Section Container
    <div>
      <Hero />
      <div className="mx-10 py-4 space-y-6 flex flex-col items-center text-left">
        <ProjectCard
              title="Personal Website"
              description="Designed and developed a personal website to showcase projects and notes, emphasizing efficient and responsive design with Tailwind CSS and Next.js."
              tags={['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']}
              githubLink="https://github.com/your-username/your-repo"
              imageSrc="/images/projects/sample_project_card_1.png"
            />
      </div>
    </div>
  );
}
