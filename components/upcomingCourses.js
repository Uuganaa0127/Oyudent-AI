// components/UpcomingCourses.js

import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Advanced Dental Surgery',
    overview: 'An in-depth course on the latest dental surgery techniques.',
    pricing: '$299',
  },
  {
    id: 2,
    title: 'Orthodontics for Beginners',
    overview: 'Learn the fundamentals of orthodontic procedures.',
    pricing: 'Free',
  },
  {
    id: 3,
    title: 'Pediatric Dentistry Innovations',
    overview: 'New methodologies for treating children’s dental issues.',
    pricing: '$199',
  },
];

export default function UpcomingCourses() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Upcoming Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.overview}</p>
            <p className="text-gray-900 font-bold mb-4">
              Pricing: {course.pricing}
            </p>
            <Link href={`/courses/${course.id}`}>
              <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
                View Details
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
