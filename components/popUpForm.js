// components/PopupForm.js

import { useEffect, useState } from 'react';

export default function PopupForm({ course, onClose }) {
  const [formFields, setFormFields] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching form fields from an API
    async function fetchForm() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        await response.json();
        setFormFields([
          { id: 'name', label: 'Full Name', type: 'text' },
          { id: 'email', label: 'Email Address', type: 'email' },
          { id: 'phone', label: 'Phone Number', type: 'tel' },
        ]);
      } catch (error) {
        console.error('Error fetching form:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Book: {course.title}</h2>

        {loading ? (
          <p className="text-gray-600">Loading form...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block font-medium mb-1">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            ))}
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Submit
              </button>
            </div>
          </form>
        )}

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl">
          &times;
        </button>
      </div>
    </div>
  );
}
