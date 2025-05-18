// File: pages/posts/[id].js
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostById } from "../../lib/posts";

export default function Post({ post }) {
  // Handle case where post might not be found
  if (!post || !post.title) {
    return (
      <Layout title="Post Not Found">
        <h1>Post Not Found</h1>
        <p>Sorry, this post could not be found.</p>
        <Link href="/blog" className="back-button">
          Back to Blog
        </Link>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} | Next.js Static Blog`}>
      <article className="blog-post">
        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-body">
          <p>{post.body}</p>

          {/* In a real blog, we would have more content here */}
          <p>
            This post has been statically generated at build time, which means
            it was pre-rendered to HTML and can be served directly from a CDN
            without involving the server for each request.
          </p>

          <p>
            Post ID: {post.id} - User ID: {post.userId}
          </p>
        </div>

        <Link href="/blog" className="back-button">
          Back to Blog
        </Link>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Get all possible post IDs
  const paths = await getAllPostIds();

  return {
    paths,
    // If fallback is false, paths not returned by getStaticPaths will result in a 404
    // If true, Next.js will serve a fallback version while generating the page
    // If 'blocking', it will wait for the page to generate (like SSR)
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch data for a single post
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    // Optional: Enable Incremental Static Regeneration
    revalidate: 3600, // Regenerate after 1 hour
  };
}
