// pages/main-events.js

import Link from "next/link";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const eventsData = [
  {
    id: 1,
    title: "Medical Conference 2024",
    date: "2024-09-15",
    description: "Join the leading minds in medical advancements.",
    image: "https://via.placeholder.com/600x400?text=Medical+Conference+2024",
  },
  {
    id: 2,
    title: "Healthcare Expo 2024",
    date: "2024-10-10",
    description: "Explore the latest healthcare technologies.",
    image: "https://via.placeholder.com/400x300?text=Healthcare+Expo+2024",
  },
  {
    id: 3,
    title: "Medical Symposium 2023",
    date: "2023-06-20",
    description: "A deep dive into recent medical research.",
    image: "https://via.placeholder.com/400x300?text=Medical+Symposium+2023",
  },
  {
    id: 4,
    title: "Health Innovation Forum",
    date: "2024-11-05",
    description: "Innovations shaping the future of healthcare.",
    image: "https://via.placeholder.com/400x300?text=Health+Innovation+Forum",
  },
  {
    id: 5,
    title: "Clinical Trials Summit",
    date: "2024-12-01",
    description: "Insights into the latest clinical trials.",
    image: "https://via.placeholder.com/400x300?text=Clinical+Trials+Summit",
  },
  {
    id: 6,
    title: "Wellness Workshop",
    date: "2024-08-18",
    description: "A workshop promoting wellness and health.",
    image: "https://via.placeholder.com/400x300?text=Wellness+Workshop",
  },
  {
    id: 7,
    title: "Global Health Summit",
    date: "2024-07-22",
    description: "Discussing global health challenges.",
    image: "https://via.placeholder.com/400x300?text=Global+Health+Summit",
  },
];

export default function MainEventsPage() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 400;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 400;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Large Event Card on the Left */}
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-80">
            <img
              src={eventsData[0].image}
              alt={eventsData[0].title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{eventsData[0].title}</h2>
            <p className="text-gray-600 mb-2">{eventsData[0].date}</p>
            <p className="text-gray-700 mb-4">{eventsData[0].description}</p>
            <Link
              href={`/events/${eventsData[0].id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Slider Section on the Right */}
        <div className="w-full md:w-1/2 relative">
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
          >
            <AiOutlineLeft size={24} />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth space-x-6 py-4"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Display Two Cards Vertically in Each Slide */}
            {Array.from({ length: Math.ceil((eventsData.length - 1) / 2) }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] space-y-6">
                {eventsData.slice(index * 2 + 1, index * 2 + 3).map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="h-40">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.date}</p>
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
