'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';

export default function VideoProofSection() {
  const [videoUrl, setVideoUrl] = useState('');

 client
  .fetch(`*[_type == "videoProof"][0]{videoFile, "url": videoFile.asset->url}`)
  .then((data) => {
    setVideoUrl(data?.url)
  })
  .catch(console.error)


  return (
    <div className="bg-white py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto items-center justify-center w-full flex max-w-2xl flex-col gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pl-4 mx-auto flex justify-center items-center flex-col w-full">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:max-w-lg"
            >
              <h2 className="text-center font-semibold text-blue-600">Audience Statistics in 6 Months</h2>
              <p className="mt-2 text-center text-3xl font-semibold tracking-tight text-gray-900 lg:text-3xl">
                Watch the Results in Action
              </p>
            </motion.div>
          </div>

          <div className="flex items-start justify-end">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xl"
            >
              {videoUrl ? (
                <video
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width="100%"
                  height="auto"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-[300px] bg-gray-200 rounded-xl animate-pulse" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
