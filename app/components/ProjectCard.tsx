import React from 'react';

// Define the interface for the props
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveDemoUrl,
}) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
        <img
          src={imageUrl}
          alt={`${title} Image`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 bg-gray-700 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {/* GitHub Link */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* GitHub Icon SVG */}
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.111.793-.261.793-.577 0-.286-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.303 3.492.997.108-.775.419-1.304.762-1.605-2.665-.303-5.467-1.334-5.467-5.933 0-1.311.468-2.382 1.236-3.221-.124-.303-.536-1.52.116-3.165 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.645.241 2.862.118 3.165.77.839 1.235 1.91 1.235 3.221 0 4.609-2.805 5.625-5.475 5.921.43.369.814 1.096.814 2.21 0 1.594-.014 2.875-.014 3.263 0 .319.192.694.8.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Live Demo Link */}
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* External Link Icon SVG */}
              <path d="M14 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-10l-6-6zm2 14H4V5h9v5h5v7zm-3-3h-2v-2h2v2zm0-4h-2V8h2v2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
