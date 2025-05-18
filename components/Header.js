// File: components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/" className="logo">
              StaticBlog
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
