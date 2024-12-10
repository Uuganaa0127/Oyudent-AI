// pages/events/[id].js

import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import RegisterPopup from "@/components/RegisterPopup";

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Medical Conference 2024",
    date: "2024-09-15",
    status: "upcoming",
    description: "A conference on the latest medical advancements.",
  },
  {
    id: 2,
    title: "Healthcare Expo 2024",
    date: "2024-10-10",
    status: "upcoming",
    description: "An expo showcasing healthcare technologies.",
  },
  {
    id: 3,
    title: "Medical Symposium 2023",
    date: "2023-06-20",
    status: "completed",
    description: "A symposium discussing medical research.",
  },
];

export default function EventDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const event = eventsData.find((event) => event.id === parseInt(id));

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  if (!event) {
    return <div className="container mx-auto px-4 py-8 text-center">Event not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-700 mb-2">{event.date}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>

      {event.status === "completed" ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Event Recap</h2>
          <p className="text-gray-600">This is the recap content, similar to a blog post.</p>
        </div>
      ) : (
        <div>
          <p className="text-green-500 font-bold mb-4">This event is upcoming. Don't miss it!</p>
          <button
            onClick={() => setShowRegisterPopup(true)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Register for Event
          </button>
        </div>
      )}

      <Link href="/events" className="text-blue-500 hover:underline mt-6 inline-block">
        Back to Events
      </Link>

      {/* Register Popup */}
      {showRegisterPopup && <RegisterPopup onClose={() => setShowRegisterPopup(false)} />}
    </div>
  );
}
