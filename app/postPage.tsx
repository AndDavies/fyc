import React from 'react';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const PostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const postDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <div className="mt-4 text-gray-300">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default PostPage;
