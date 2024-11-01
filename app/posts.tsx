import React from 'react';
import { getAllPosts } from '../lib/posts';
import PostCard from './components/PostCard'; // Ensure the path is correct


export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          tags={post.tags}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
