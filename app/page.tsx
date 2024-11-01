import React from 'react';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import { getSortedPostsData } from '../lib/posts';

const Page: React.FC = () => {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 5); // Get the 5 most recent posts

  return (
    <div className="container mx-auto p-8">
      <Hero />
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8">Recent Posts</h2>
        <div>
          {recentPosts.map(({ slug, title, date, excerpt, tags }) => (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              date={date}
              excerpt={excerpt}
              tags={tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
