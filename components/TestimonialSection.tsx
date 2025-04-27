 'use client'

import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { Container } from './Container';




const testimonials = [
     {
    src: "/testi1.jpg",
    alt: "From Precious"
  },
  {
    src: "/testi2.jpg",
    alt: "From Caleb P. Owolabi"
  },
  {
    src: "/testi3.jpg",
    alt: "From Coach Nuel"
  },
  {
    src: "/testi4.jpg",
    alt: "From Josh Tv"
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function TestimonialSection() {
  return (
    <Container> 
          <div className="lg:py-12 bg-white" id='testimonials'>
      {/* Section Title */}
      {/* <motion.div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">What People Are Saying & Results</h2>
      </motion.div> */}
         <motion.div
                  variants={itemVariants}
                  className="mx-auto max-w-2xl text-center mb-8"
                >
                  <h2 className="text-base font-semibold text-blue-600">What people are saying</h2>
                  <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Testimonials From Past Clients
                  </p>
                
                </motion.div>

    {/* Row 1: Testimonials - Carousel on left on desktop, on top on mobile */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-1 lg:order-1" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={testimonials} />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="order-2 lg:order-2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What People Are Saying</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Precious moved from 80 - 1500+ status views in just two weeks after implementing the N-WAAM strategy.</li>
              <li>Caleb was delighted with how easy the lessons were to follow and how quickly he began to implement them.</li>
              <li>Coach Nuel was inspired to share his success story after completing the program and seeing noticeable improvement.</li>
              <li>Josh said the course <b>“worked like magic”</b> after he implemented the N-WAAM strategy.</li>
              <li>All the testimonials are displayed on the flyer as shown above, many more...</li>
            </ul>
          </motion.div>
        </div>
      </div>

    

     
    </div>"
    </Container>
  );
}


 