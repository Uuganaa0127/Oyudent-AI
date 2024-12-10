// pages/blog.js

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import EventCard from "@/components/EventCard";

const blogPosts = {
  "Clinical Insights": [
    {
      id: 1,
      title: "Advances in Cardiology",
      summary: "Discover the latest breakthroughs in cardiology and heart health.",
      thumbnail: "https://via.placeholder.com/400x300?text=Cardiology",
    },
    {
      id: 2,
      title: "Innovative Cancer Therapies",
      summary: "Cutting-edge therapies transforming cancer treatment.",
      thumbnail: "https://via.placeholder.com/400x300?text=Cancer+Therapies",
    },
  ],
  "Medical News": [
    {
      id: 3,
      title: "Global Health Trends 2024",
      summary: "Key global health trends expected in 2024.",
      thumbnail: "https://via.placeholder.com/400x300?text=Health+Trends",
    },
    {
      id: 4,
      title: "New Vaccines on the Horizon",
      summary: "Upcoming vaccines that could change infectious disease landscapes.",
      thumbnail: "https://via.placeholder.com/400x300?text=Vaccines",
    },
  ],
  "Product Updates": [
    {
      id: 5,
      title: "Next-Gen MRI Machines",
      summary: "Latest MRI technology for faster, clearer imaging.",
      thumbnail: "https://via.placeholder.com/400x300?text=MRI+Machines",
    },
    {
      id: 6,
      title: "AI in Diagnostics",
      summary: "How AI is improving diagnostic accuracy and efficiency.",
      thumbnail: "https://via.placeholder.com/400x300?text=AI+Diagnostics",
    },
  ],
};

const events = {
  upcoming: [
    {
      id: 1,
      title: "Medical Conference 2024",
      date: "2024-09-15",
      description: "Join the leading minds in medical advancements.",
      thumbnail: "https://via.placeholder.com/400x300?text=Medical+Conference",
    },
    {
      id: 2,
      title: "Healthcare Expo 2024",
      date: "2024-10-10",
      description: "Explore the latest healthcare technologies.",
      thumbnail: "https://via.placeholder.com/400x300?text=Healthcare+Expo",
    },
  ],
  completed: [
    {
      id: 3,
      title: "Medical Symposium 2023",
      date: "2023-06-20",
      description: "A symposium discussing medical research.",
      thumbnail: "https://via.placeholder.com/400x300?text=Medical+Symposium",
    },
  ],
};

export default function BlogPage() {
  const [currentSection, setCurrentSection] = useState("blog");
  const [selectedCategory, setSelectedCategory] = useState("Clinical Insights");
  const [eventType, setEventType] = useState("upcoming");

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog and Events</h1>

        {/* Main Section Toggle */}
        <div className="flex justify-center mb-8 space-x-8 text-lg font-semibold">
          <button
            onClick={() => setCurrentSection("blog")}
            className={`transition ${
              currentSection === "blog" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setCurrentSection("events")}
            className={`transition ${
              currentSection === "events" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            Events
          </button>
        </div>

        {/* Blog Section */}
        {currentSection === "blog" && (
          <div>
            <div className="flex justify-center mb-6 space-x-6">
              {Object.keys(blogPosts).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-lg font-semibold transition ${
                    selectedCategory === category ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts[selectedCategory].map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Events Section */}
        {currentSection === "events" && (
          <div>
            <div className="flex justify-center mb-6 space-x-6">
              <button
                onClick={() => setEventType("upcoming")}
                className={`text-lg font-semibold transition ${
                  eventType === "upcoming" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setEventType("completed")}
                className={`text-lg font-semibold transition ${
                  eventType === "completed" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
                }`}
              >
                Completed Events
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events[eventType].map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
