import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
}

const PostCard: React.FC<PostCardProps> = ({ title, date, excerpt, slug, tags }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md mb-6 p-4">
      <h3 className="text-xl font-bold">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <p className="text-gray-300 mb-2">{excerpt}</p>
      <p className="text-gray-500">{date}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-600 text-white text-sm px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
