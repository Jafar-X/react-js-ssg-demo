import Link from "next/link";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/posts";

export default function Home({ featuredPosts }) {
  return (
    <Layout title="Home | Next.js Static Blog">
      <div className="home-page">
        <h1>Welcome to StaticBlog</h1>
        <p className="description">
          A demonstration of Next.js Static Site Generation (SSG)
        </p>

        <div className="featured-posts">
          <h2>Featured Posts</h2>
          <ul className="blog-list">
            {featuredPosts.map((post) => (
              <li key={post.id} className="blog-post">
                <h2 className="blog-post-title">
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.body.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="back-button">
            View All Posts
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  console.log("Fetch 3 posts from home page starting...");

  // Get just 3 posts for the homepage
  const featuredPosts = await getAllPosts(3);
  console.log("fetched 3 posts from home");

  return {
    props: {
      featuredPosts,
    },
  };
}
