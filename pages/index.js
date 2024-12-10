// pages/index.js

import { motion } from "framer-motion";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import BlogSections from "@/components/BlogSection";
import UpcomingCourses from "@/components/UpcomingCourses";
import EventsPage from "./mainEventsPage";
import FilterSection from "@/components/FilterSection";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <TopBar cart={cart} /> */}
      <Banner />

      <main className="container mx-auto px-4 space-y-24">
        {/* Featured Products Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2> */}
          <FeaturedProducts onAddToCart={handleAddToCart} />
          <FilterSection/>
        </motion.section>

        {/* Blog Sections */}
        <EventsPage/>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2> */}
          <BlogSections />
        </motion.section>

        {/* Upcoming Courses */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Courses</h2>
          <UpcomingCourses />
        </motion.section>
      </main>

      <footer className="text-center py-6 mt-12 bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
