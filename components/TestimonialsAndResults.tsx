 'use client'

import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { Container } from './Container';



// Additional images for the second carousel
const resultImages = [
  {
    src: "/result1.jpg",
    alt: "22k JAMBites in one month "
  },
  {
    src: "/result2.jpg",
    alt: "10k Scholars in 6 months"
  },
  {
    src: "/result3.jpg",
    alt: "6k followers in 6 months"
  },
 
];

const testimonials = [
     {
    src: "/testi1.jpg",
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function TestimonialsAndResults() {
  return (
    <Container id='results' > 
          <div className="pb-12 pt-4 bg-white">
      {/* Section Title */}
      {/* <motion.div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">What People Are Saying & Results</h2>
      </motion.div> */}
         <motion.div
                  variants={itemVariants}
                  className="mx-auto max-w-2xl text-center mb-8"
                >
                  <h2 className="text-base font-semibold text-blue-600">Results Achieved</h2>
                  <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Amazing Results in Just 30 Days!
                  </p>
                
                </motion.div>

        
         {/* Row 2: Results - Carousel on right on desktop, on top on mobile */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Results Carousel - Always appears first in the DOM for mobile priority */}
          <motion.div
            className="order-1 lg:order-2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={resultImages} />
          </motion.div>

          {/* Results Text */}
          <motion.div
            className="order-2 lg:order-1" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Results Achieved</h3> */}
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>22k JAMBites in one month</li>
              <li>10k channel followers</li>
              <li>6k channel followers</li>
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


  {/* Row 1: Testimonials - Carousel on left on desktop, on top on mobile */}
      // <div className="mb-16">
      //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      //     <motion.div
      //       className="order-1 lg:order-1" 
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       transition={{ duration: 0.6 }}
      //     >
      //       <Carousel images={resultImages} />
      //     </motion.div>

      //     {/* Testimonials */}
      //     <motion.div
      //       className="order-2 lg:order-2" // Second on mobile and desktop
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       transition={{ duration: 0.6, delay: 0.2 }}
      //     >
      //       <h3 className="text-2xl font-bold text-gray-800 mb-4">What People Are Saying</h3>
      //       <ul className="list-disc pl-5 space-y-3 text-gray-700">
      //         <li>"This strategy changed my business, I saw amazing results in no time!"</li>
      //         <li>"The best thing about this program is its simplicity and effectiveness."</li>
      //         <li>"The mentorship provided is invaluable, always available to answer my questions."</li>
      //         <li>"I highly recommend this to anyone looking to grow their WhatsApp business."</li>
      //         <li>"Since implementing these strategies, my customer engagement has doubled."</li>
      //         <li>"Worth every penny! The ROI has been incredible for my small business."</li>
      //       </ul>
      //     </motion.div>
      //   </div>
      // </div>