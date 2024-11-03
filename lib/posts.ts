import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// Function to fetch all posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      tags: data.tags,
      excerpt: data.excerpt,
      imgUrl: data.imgUrl,
      slug: fileName.replace(/\.md$/, ''), // Remove ".md" from filename to create slug
    };
  });

  return allPostsData;
}

// Function to fetch sorted posts data
export function getSortedPostsData() {
  const allPostsData = getAllPosts();
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
