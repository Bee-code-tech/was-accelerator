'use client'
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/Container';
import Carousel from './Carousel';
import { client } from '@/lib/sanity';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SkeletonLoader = () => (
  <div className="pb-12 pt-4 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="h-6 w-40 mx-auto bg-gray-300 animate-pulse rounded mb-2" />
        <div className="h-10 w-64 mx-auto bg-gray-300 animate-pulse rounded" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);


const Results = () => {
  interface ResultData {
    images?: { asset: any; description?: string }[];
    list?: string[];
  }

  const [resultData, setResultData] = useState<ResultData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "result"][0]`)
      .then((data) => setResultData(data))
      .catch(console.error);
  }, []);

  if (!resultData) {
    return <SkeletonLoader />;
  }

  const resultImages = resultData?.images?.map((img) => ({
    src: builder.image(img.asset).url(),
    alt: img.description || 'Image description'
  })) || [];

  return (
    <Container id="results">
      <div className="pb-12 pt-4 bg-white">
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-base font-semibold text-blue-600">Results Achieved</h2>
          <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Amazing Results in Just 30 Days!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={resultImages} />
          </motion.div>
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              {resultData?.list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Results;
