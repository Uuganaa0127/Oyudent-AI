// components/FilterSection.js

import { useState } from "react";
import { filterData } from "@/data/brandsData";

export default function FilterSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    setSelectedStep(null); // Reset the selected step when switching categories
  };

  const handleStepClick = (stepId) => {
    setSelectedStep((prevStep) => (prevStep === stepId ? null : stepId));
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Filter by Profession</h2>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={() => handleCategoryClick("dentists")}
          className={`px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 ${
            selectedCategory === "dentists"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Dentists
        </button>
        <button
          onClick={() => handleCategoryClick("technicians")}
          className={`px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 ${
            selectedCategory === "technicians"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Technicians
        </button>
      </div>

      {/* Steps and Brands */}
      {selectedCategory && (
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-md shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700 capitalize">{selectedCategory} Steps</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {filterData[selectedCategory].steps.map((step) => (
              <div key={step.id} className="flex-shrink-0 w-52">
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`w-full px-4 py-3 h-20 rounded-md text-center font-medium transition-colors duration-200 truncate ${
                    selectedStep === step.id
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  title={step.title} // Show full title on hover
                >
                  {step.title}
                </button>

                {/* Display Brands when Step is Selected */}
                {selectedStep === step.id && (
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-4 max-h-48 overflow-y-auto">
                    <h4 className="text-lg font-medium mb-2 text-gray-600">Brands</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.brands.map((brand, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-700 truncate"
                          title={brand} // Show full brand name on hover
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
