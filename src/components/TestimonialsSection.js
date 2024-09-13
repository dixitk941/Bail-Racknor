import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Legal Aid Provider",
      feedback:
        "Bail Reckoner made it so easy to manage and submit bail applications for my clients. The process is seamless and saves us so much time.",
      image: "https://via.placeholder.com/100x100",
    },
    {
      name: "Jane Smith",
      role: "Family Member",
      feedback:
        "The platform gave me peace of mind by keeping me informed throughout the entire bail process. Highly recommend Bail Reckoner!",
      image: "https://via.placeholder.com/100x100",
    },
    {
      name: "Raj Kumar",
      role: "Undertrial Prisoner",
      feedback:
        "The real-time tracking and easy-to-use interface made my experience stress-free. Thank you for creating such a helpful tool.",
      image: "https://via.placeholder.com/100x100",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          What People Are Saying
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Hear from those who have benefitted from Bail Reckoner.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <FaQuoteLeft className="text-indigo-600 text-3xl mx-auto" />
              <p className="mt-4 text-gray-600">"{testimonial.feedback}"</p>
              <div className="flex items-center justify-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
