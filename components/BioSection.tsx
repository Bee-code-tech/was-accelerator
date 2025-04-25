'use client'
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { BsLinkedin, BsTwitter, BsInstagram, BsWhatsapp, BsFacebook } from 'react-icons/bs';
import Image from 'next/image'; 
import { useState } from 'react';
import Headline from './Headline';

// Animation Variants for Framer Motion
const bioVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const BioSection = () => {
  return (
    <Container className=" pb-16 text-center lg:pt-32 relative" id='about'>
      <Headline title='Meet Your Instructor' />
      
      {/* Bio Section */}
      <motion.div
        variants={bioVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Left Side - Client Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <Image
            src="/chimex.jpg" 
            alt="Chima Ugbaja E."
            width={300}
            height={300}
            className="rounded-lg w-full lg:w-[75%] shadow-lg"
          />
        </div>

        {/* Right Side - Client Information */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-slate-900">Chima Ugbaja E.</h2>
          <p className="mt-4 text-md text-slate-700">
            CEO of CHIMEXSUB LIMITED, SCHOLARSPRO ACADEMY, and a Lead Generation Expert.
            <br />
            A passionate WhatsApp marketer, I’ve helped over 500+ marketers grow and monetize their WhatsApp audience.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 items-center justify-center lg:justify-start">
            <a href="https://whatsapp.com/channel/0029Vaj6EiFKAwEekrenp82k" target="_blank" className="text-blue-600">
              <BsWhatsapp size={24} />
            </a>
            <a href="https://www.facebook.com/share/1BPRfdSU7S/?mibextid=wwXIfr" target="_blank" className="text-blue-600">
              <BsFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/chimexsub11?igsh=MXB0bmV4OGowY2tpNw%3D%3D&utm_source=qr" target="_blank" className="text-blue-600">
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default BioSection;
