import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  imgUrl: string; // New property for the image URL
}

const PostCard: React.FC<PostCardProps> = ({ title, date, excerpt, slug, tags, imgUrl }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-md mb-6 p-4 w-full sm:w-1/2 md:w-1/3">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={imgUrl}
          alt={title}
          className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          width={400} // Fixed width for Next.js Image optimization
          height={400} // Fixed height for Next.js Image optimization
        />
      </div>
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
