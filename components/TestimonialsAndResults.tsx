'use client'
import { motion } from 'framer-motion';
import { Carousel } from './Carousel';

// Testimonial and Result Data
const testimonials = [
  {
    name: 'John Doe',
    image: '/path-to-image1.jpg',
    quote: 'This is an amazing strategy that helped me increase my WhatsApp audience rapidly!',
  },
  {
    name: 'Jane Smith',
    image: '/path-to-image2.jpg',
    quote: 'I went from 0 to 2000 views in less than a month. Highly recommend this blueprint.',
  },
  // Add more testimonials
];

const results = [
  {
    result: 'Achieved 2000+ views in 30 days',
    image: '/path-to-result-image1.jpg',
  },
  {
    result: 'Earned 230k+ monthly with WhatsApp marketing',
    image: '/path-to-result-image2.jpg',
  },
  // Add more results
];

export default function TestimonialsAndResults() {
  return (
    <div className="py-16 px-6 bg-white">
      {/* Section Title */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">What People Are Saying & Results</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonials Section */}
        <div className="space-y-6">
          <motion.div
            className="text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800">What People Are Saying</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>"This strategy changed my business, I saw amazing results in no time!"</li>
              <li>"The best thing about this program is its simplicity and effectiveness."</li>
              <li>"The mentorship provided is invaluable, always available to answer my questions."</li>
              <li>"I highly recommend this to anyone looking to grow their WhatsApp business."</li>
              {/* Add more testimonials as bullet points */}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel items={testimonials} />
          </motion.div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <motion.div
            className="text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Results Achieved</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Achieved 2000+ WhatsApp views in just 30 days!</li>
              <li>Earned over 230k+ monthly from WhatsApp marketing.</li>
              <li>Successfully grew a large and engaged audience without paid ads.</li>
              <li>Mastered WhatsApp copywriting and automation to maximize sales.</li>
              {/* Add more results as bullet points */}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The carousel now will have results with images */}
            <Carousel items={results} isResult />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
