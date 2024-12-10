// components/EventCard.js

import Link from "next/link";

export default function EventCard({ event, onRegister }) {
  return (
    <div className="bg-white p-6 border rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-700 mb-2">{event.date}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>

      {event.status === "upcoming" && onRegister && (
        <button
          onClick={() => onRegister(event)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      )}

      <Link href={`/events/${event.id}`} className="text-blue-500 hover:underline block mt-4">
        View Details
      </Link>
    </div>
  );
}
