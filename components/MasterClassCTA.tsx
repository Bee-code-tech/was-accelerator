'use client'
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MasterclassCTA() {
  // Animation Variants for Framer Motion
  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const slideUpVariants : Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3, ease: 'easeOut' } },
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('masterclass-section');
    const rect = element?.getBoundingClientRect();
    if ((rect?.top ?? Infinity) <= window.innerHeight && (rect?.bottom ?? -Infinity) >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          id="masterclass-section"
          variants={fadeInVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <motion.h2
            variants={slideUpVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
          >
            Join the Masterclass That’s Transforming WhatsApp Marketers
          </motion.h2>

          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.4, duration: 1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-gray-300"
          >
            Get lifetime mentorship, learn how to grow your audience to 2,000+ views, and start monetizing with our
            exclusive WhatsApp Audience Accelerator Masterclass.
          </motion.p>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4"
          >
            <a
              href="https://wa.link/ltfzo8"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reserve Your Spot Now
            </a>
           
          </motion.div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#3B82F6" />
                <stop offset={1} stopColor="#06B6D4" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
