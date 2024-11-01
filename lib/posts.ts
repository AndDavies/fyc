import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the path to the posts directory (where the Markdown files are stored)
const postsDirectory = path.join(process.cwd(), 'posts');

// Define the TypeScript interface for the structure of a blog post
export interface PostData {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string;
}

// Function to get all posts from the 'posts' folder
export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // Remove ".md" extension from the filename
    const fullPath = path.join(postsDirectory, fileName); // Create the full file path
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // Read the file contents
    
    const { data, content } = matter(fileContents); // Parse the front matter and content

    // Ensure the data contains required fields before returning
    if (!data.title || !data.date || !data.description) {
      throw new Error(`Markdown file at ${fullPath} is missing required fields.`);
    }

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content, // Include the parsed content of the post
    };
  });
}

// Function to get a single post by its slug (the filename)
export function getPostBySlug(slug: string): PostData | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`); // Create the full file path for the post
  const fileContents = fs.readFileSync(fullPath, 'utf8'); // Read the file contents

  const { data, content } = matter(fileContents); // Parse the front matter and content

  // Ensure the data contains required fields before returning
  if (!data.title || !data.date || !data.description) {
    return null;
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content, // Include the parsed content of the post
  };
}
