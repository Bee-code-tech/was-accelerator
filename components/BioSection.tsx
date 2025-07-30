'use client'
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/Container';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import Headline from './Headline';
import { client } from '@/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const bioVariants : Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    } 
  },
};

const SkeletonLoader = () => (
  <div className="flex flex-col py-12 lg:flex-row items-center w-full mx-auto max-w-5xl justify-between gap-10">
    <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
      <div className="bg-gray-300 animate-pulse rounded-lg w-[75%] h-[500px]" />
    </div>
    <div className="lg:w-1/2 text-center lg:text-left">
      <div className="bg-gray-300 animate-pulse h-8 w-32 mb-4 rounded" />
      <div className="bg-gray-300 animate-pulse h-6 w-48 mb-6 rounded" />
      <div className="flex gap-4 mt-4 items-center justify-center lg:justify-start">
        <div className="bg-gray-300 animate-pulse w-8 h-8 rounded-full" />
        <div className="bg-gray-300 animate-pulse w-8 h-8 rounded-full" />
        <div className="bg-gray-300 animate-pulse w-8 h-8 rounded-full" />
      </div>
    </div>
  </div>
);

interface BioData {
  image?: { asset?: any };
  name?: string;
  title?: string;
  description?: string;
  socialLinks?: { platform: string; url: string }[];
}

const BioSection = () => {
  const [bioData, setBioData] = useState<BioData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "bio"][0]`)
      .then((data) => setBioData(data))
      .catch(console.error);
  }, []);

  if (!bioData) {
    return <SkeletonLoader />;
  }

  const imageUrl = bioData?.image?.asset ? builder.image(bioData.image.asset).url() : '';

  return (
    <Container className="pb-16 text-center lg:pt-32 relative" id="about">
      <Headline title="Meet Your Instructor" />

      <motion.div
        variants={bioVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={bioData?.name || 'Instructor Image'}
              width={300}
              height={300}
              className="rounded-lg w-full lg:w-[75%] shadow-lg"
            />
          ) : (
            <div className="bg-gray-300 animate-pulse rounded-lg w-[75%] h-72" />
          )}
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-slate-900">
            {bioData?.name || 'Loading...'}
          </h2>
          <p className="mt-4 text-md text-slate-700">
            {bioData?.description || 'Loading...'}
          </p>

          <div className="flex gap-4 mt-4 items-center justify-center lg:justify-start">
            {bioData?.socialLinks?.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" className="text-blue-600">
                {link.platform === 'whatsapp' && <BsWhatsapp size={24} />}
                {link.platform === 'facebook' && <BsFacebook size={24} />}
                {link.platform === 'instagram' && <BsInstagram size={24} />}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default BioSection;
