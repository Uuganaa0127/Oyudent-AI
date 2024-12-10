// components/BlogSections.js

import BlogCard from "@/components/BlogCard";

const blogData = {
  clinicalInsights: [
    {
      id: 1,
      title: "Advanced Dental Surgery Techniques",
      summary: "Discover new techniques in modern dental surgery practices.",
      thumbnail: "https://via.placeholder.com/300x200?text=Clinical+Insights+1",
    },
    {
      id: 2,
      title: "Orthodontic Case Study",
      summary: "A case study on innovative orthodontic procedures.",
      thumbnail: "https://via.placeholder.com/300x200?text=Clinical+Insights+2",
    },
    {
      id: 3,
      title: "Pediatric Dentistry Innovations",
      summary: "New methods for pediatric dental care.",
      thumbnail: "https://via.placeholder.com/300x200?text=Clinical+Insights+3",
    },
  ],
  medicalNews: [
    {
      id: 4,
      title: "New Dental Health Policies",
      summary: "Overview of recent dental health regulations.",
      thumbnail: "https://via.placeholder.com/300x200?text=Medical+News+1",
    },
    {
      id: 5,
      title: "Upcoming Dental Conferences 2024",
      summary: "Key conferences and events for dental professionals.",
      thumbnail: "https://via.placeholder.com/300x200?text=Medical+News+2",
    },
    {
      id: 6,
      title: "Dental Health Awareness Campaigns",
      summary: "New campaigns to promote dental health awareness.",
      thumbnail: "https://via.placeholder.com/300x200?text=Medical+News+3",
    },
  ],
  productUpdates: [
    {
      id: 7,
      title: "Next-Gen Dental Implants",
      summary: "Introducing the latest advancements in dental implants.",
      thumbnail: "https://via.placeholder.com/300x200?text=Product+Updates+1",
    },
    {
      id: 8,
      title: "Upgraded Sterilization Equipment",
      summary: "Features of the new sterilization tools.",
      thumbnail: "https://via.placeholder.com/300x200?text=Product+Updates+2",
    },
    {
      id: 9,
      title: "New Dental Tools Collection",
      summary: "Explore our new range of professional dental tools.",
      thumbnail: "https://via.placeholder.com/300x200?text=Product+Updates+3",
    },
  ],
};

export default function BlogSections() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clinical Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Clinical Insights</h3>
          <div className="space-y-8">
            {blogData.clinicalInsights.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Medical News */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Medical News</h3>
          <div className="space-y-8">
            {blogData.medicalNews.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Product Updates */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Product Updates</h3>
          <div className="space-y-8">
            {blogData.productUpdates.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
