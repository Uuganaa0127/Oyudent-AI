// pages/courses/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PopupForm from '@/components/PopupForm';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch course details from a backend API
      async function fetchCourse() {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await response.json();
          setCourse({
            id: data.id,
            title: `Course ${data.id}`,
            description: data.body,
            pricing: id % 2 === 0 ? 'Free' : `$${id * 100}`,
          });
        } catch (error) {
          console.error('Error fetching course details:', error);
        } finally {
          setLoading(false);
        }
      }

      fetchCourse();
    }
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!course) return <div className="p-6 text-center">Course not found.</div>;

  const handleBookNow = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-gray-900 font-bold mb-6">Pricing: {course.pricing}</p>

      <button
        onClick={handleBookNow}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Book Now
      </button>

      {showPopup && <PopupForm course={course} onClose={closePopup} />}
    </div>
  );
}
