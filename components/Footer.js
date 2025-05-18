// File: components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} StaticBlog - Built with Next.js SSG</p>
    </footer>
  );
}
