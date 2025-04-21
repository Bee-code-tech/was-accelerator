'use client'
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { User2, UserIcon } from 'lucide-react';

// Animation Variants for Framer Motion
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

// Countdown Timer Logic
interface FormatTimeProps {
  time: number;
}

const Hero = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const countdownEndTime = new Date('2025-05-01T00:00:00').getTime();

  const [offerTitle] = useState('Get 6 months free - Limited Time Offer'); 
  const [offerDescription] = useState('Join over 500 TOP WhatsApp marketers who are generating 230k+ monthly by monetizing their audience - without referrals, contact gain, bulk messages, or paid advertising.');

  // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEndTime - now;
      setRemainingTime(distance);

      if (distance <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownEndTime]);

  // Format time to HH:MM:SS with leading zero for single digits
  const formatTime = (time: FormatTimeProps['time']): string => {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32 relative">
      {/* Blue Blurry Circles */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-30 blur-3xl z-0"></div>

      {/* Hero Title */}
      <motion.h1
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }} // Added delay
        className="mx-auto max-w-4xl font-display lg:text-5xl font-medium tracking-tight text-slate-900 text-3xl lg:leading-16 z-10"
      >
        Grow Your WhatsApp Audience to
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative mx-3">2,000+ Views</span>
        </span>
        in 30 Days!
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Added delay
        className="mx-auto mt-6 font-display max-w-2xl text-lg tracking-tight text-slate-700 z-10"
      >
        {offerDescription}
      </motion.p>

      {/* Buttons */}
      {/* <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Added delay
        className="mt-10 flex flex-col lg:flex-row justify-center gap-6 z-10"
      >
              <Button color='blue' href="/register">
                  <BsWhatsapp className="text-xl" />
                   <span className="ml-2">Contact Us</span>
              </Button>
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline">
          <User2 className="text-md" />
          <span className="ml-2">About Us</span>
        </Button>
      </motion.div> */}

      {/* Countdown Timer */}
      {/* <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} // Added delay
        className="mt-10 p-8  text-blue-500  max-w-[400px] mx-auto z-10"
      >
        <h3 className="font-semibold text-xl mb-4"> Exlusive Discount (30% off) </h3>
        <div className="flex justify-center gap-4 bg-blue-100 border border-blue-500 py-3 rounded-lg text-blue-500">
          <div className="text-center">
            <div className="text-3xl font-bold">{formatTime(remainingTime).split(':')[0]}</div>
            <div className="text-lg">Days</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{formatTime(remainingTime).split(':')[1]}</div>
            <div className="text-lg">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{formatTime(remainingTime).split(':')[2]}</div>
            <div className="text-lg">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{formatTime(remainingTime).split(':')[3]}</div>
            <div className="text-lg">Seconds</div>
          </div>
        </div>
      </motion.div> */}
    </Container>
  );
};

export default Hero;
