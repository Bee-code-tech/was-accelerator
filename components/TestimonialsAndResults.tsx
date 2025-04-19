 'use client'

import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { Container } from './Container';



// Additional images for the second carousel
const resultImages = [
  {
    src: "/result1.jpg",
    alt: "Massive Result"
  },
  {
    src: "/result2.jpg",
    alt: "Client Success Story 2"
  },
 
];

const testimonials = [
     {
    src: "/testi.jpg",
    alt: "Client Success Story 3"
  },
  {
    src: "/testi2.jpg",
    alt: "Client Success Story 4"
  },
  {
    src: "/testi3.jpg",
    alt: "Client Success Story 5"
  },
  {
    src: "/testi4.jpg",
    alt: "Client Success Story 5"
  }
]

export default function TestimonialsAndResults() {
  return (
    <Container> 
          <div className="py-12 bg-white">
      {/* Section Title */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">What People Are Saying & Results</h2>
      </motion.div>

      {/* Row 1: Testimonials - Carousel on left on desktop, on top on mobile */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Carousel - Always appears first in the DOM for mobile priority */}
          <motion.div
            className="order-1 lg:order-1" // First on mobile and desktop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={resultImages} />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="order-2 lg:order-2" // Second on mobile and desktop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What People Are Saying</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>"This strategy changed my business, I saw amazing results in no time!"</li>
              <li>"The best thing about this program is its simplicity and effectiveness."</li>
              <li>"The mentorship provided is invaluable, always available to answer my questions."</li>
              <li>"I highly recommend this to anyone looking to grow their WhatsApp business."</li>
              <li>"Since implementing these strategies, my customer engagement has doubled."</li>
              <li>"Worth every penny! The ROI has been incredible for my small business."</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Row 2: Results - Carousel on right on desktop, on top on mobile */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Results Carousel - Always appears first in the DOM for mobile priority */}
          <motion.div
            className="order-1 lg:order-2" // First on mobile, second on desktop (swapped)
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={testimonials} />
          </motion.div>

          {/* Results Text */}
          <motion.div
            className="order-2 lg:order-1" // Second on mobile, first on desktop (swapped)
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Results Achieved</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Achieved 2000+ WhatsApp views in just 30 days!</li>
              <li>Earned over 230k+ monthly from WhatsApp marketing.</li>
              <li>Successfully grew a large and engaged audience without paid ads.</li>
              <li>Mastered WhatsApp copywriting and automation to maximize sales.</li>
              <li>Increased conversion rates by 45% through optimized messaging.</li>
              <li>Reduced customer response time by 75% with automated workflows.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
    </Container>
  );
}