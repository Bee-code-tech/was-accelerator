'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    image: '/path-to-image1.jpg',
    quote: 'This strategy changed my business, I saw amazing results in no time!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/path-to-image2.jpg',
    quote: 'I went from 0 to 2000 views in less than a month. Highly recommend this blueprint.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    image: '/path-to-image3.jpg',
    quote: 'The best thing about this program is its simplicity and effectiveness.',
  },
  {
    id: 4,
    name: 'Maya Lee',
    image: '/path-to-image4.jpg',
    quote: 'The mentorship provided is invaluable, always available to answer my questions.',
  },
  {
    id: 5,
    name: 'Derek Blake',
    image: '/path-to-image5.jpg',
    quote: 'I highly recommend this to anyone looking to grow their WhatsApp business.',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle the next and previous image transitions
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Content Section */}
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:max-w-lg"
            >
              <h2 className="text-base font-semibold text-blue-600">What People Are Saying</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                See what our users have to say
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Read the stories from our users about how our strategies have helped them grow their WhatsApp audience
                and monetize effectively.
              </p>
            </motion.div>
          </div>

          {/* Carousel Section */}
          <div className="flex items-start justify-end lg:order-first">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-xl"
            >
              {/* Carousel */}
              <div className="relative">
                <motion.div
                  className="flex overflow-x-hidden"
                  key={activeIndex}
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  exit={{ x: -1000 }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="flex-none w-full h-80 bg-gray-200 rounded-lg shadow-md p-4"
                    >
                      <img
                        src={testimonial.image}
                        alt={`testimonial-${testimonial.id}`}
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                      <p className="text-center text-lg text-gray-700">{testimonial.quote}</p>
                      <p className="text-center text-sm text-gray-500 mt-2">{testimonial.name}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Dots Below */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-3 w-3 rounded-full ${
                        activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <button
                  onClick={goToPrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full"
                >
                  &gt;
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
