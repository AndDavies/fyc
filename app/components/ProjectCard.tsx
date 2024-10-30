import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubLink, imageSrc }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg shadow-md p-4 flex justify-end space-x-6 w-full max-w-2xl">
      {/* Image Section */}
      <div className="-ml-20 relative">
        <div className="overflow-hidden rounded-3xl">    
          <Image
            src={imageSrc} 
            alt={`${title} Logo`}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-2/3 antialiased">
        <h3 className="text-2xl font-bold mb-2 text-gray-400">{title}</h3>
        <p className="mb-4 text-sm text-gray-400 ">{description}</p>

        {/* Tags Section */}
        <div className="flex space-x-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="flex items-center space-x-2">
  
          <a
            href={githubLink}
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
