// components/BlogCard.js

import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <Link href={`/blogs/${post.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          View More
        </Link>
      </div>
    </div>
  );
}
