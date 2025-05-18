// File: pages/blog.js
import Link from "next/link";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog | Next.js Static Blog">
      <div>
        <h1>Blog Posts</h1>
        <p>All posts are statically generated at build time.</p>

        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.id} className="blog-post">
              <h2 className="blog-post-title">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p>{post.body.substring(0, 150)}...</p>
              <Link href={`/posts/${post.id}`}>Read more →</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Fetch posts from JSONPlaceholder API
  console.log("Fetching posts for the blog page...");
  const posts = await getAllPosts(10); // Limiting to 10 posts
  console.log(`Fetched ${posts.length} posts`);

  return {
    props: {
      posts,
    },
    // Optionally revalidate after a certain period (in seconds)
    // This enables Incremental Static Regeneration (ISR)
    revalidate: 60, // Regenerate after 1 hour
  };
}
