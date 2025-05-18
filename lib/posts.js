// File: lib/posts.js


export async function getAllPosts(limit = null) {
  const url = limit
    ? `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    : "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(url);
  const posts = await res.json();
  return posts;
}


export async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}


export async function getAllPostIds() {
  const posts = await getAllPosts();

  // Transform the array of posts into the required format for getStaticPaths
  return posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}
