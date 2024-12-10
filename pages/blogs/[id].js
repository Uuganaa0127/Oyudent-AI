// pages/blogs/[id].js

import { useRouter } from "next/router";
import { useState } from "react";
import RegisterPopup from "@/components/RegisterPopup";

// Sample blog data
const blogData = {
  1: {
    title: "Advances in Cardiology",
    content: `
      <h1 class="text-4xl font-bold mb-6">Advances in Cardiology</h1>
      <p class="text-gray-700 mb-4">Discover the latest breakthroughs in cardiology and heart health.</p>
      <img src="https://via.placeholder.com/800x400?text=Cardiology" alt="Cardiology" class="w-full rounded-lg mb-6" />
      <p class="text-gray-700 mb-4">New technologies are revolutionizing how we treat heart disease...</p>
    `,
  },
  2: {
    title: "Innovative Cancer Therapies",
    content: `
      <h1 class="text-4xl font-bold mb-6">Innovative Cancer Therapies</h1>
      <p class="text-gray-700 mb-4">Cutting-edge therapies transforming cancer treatment.</p>
      <img src="https://via.placeholder.com/800x400?text=Cancer+Therapies" alt="Cancer Therapies" class="w-full rounded-lg mb-6" />
      <p class="text-gray-700 mb-4">Explore the latest advancements in targeted therapies and immunotherapies...</p>
    `,
  },
};

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData[id];
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  if (!blog) {
    return <div className="container mx-auto py-12 px-4 text-center">Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="prose max-w-full mx-auto p-6 bg-white rounded-lg shadow-md" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Register Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowRegisterPopup(true)}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Register for Updates
        </button>
      </div>

      {/* Register Popup */}
      {showRegisterPopup && <RegisterPopup onClose={() => setShowRegisterPopup(false)} />}
    </div>
  );
}
