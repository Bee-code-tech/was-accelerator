'use client'
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Proven Strategy.',
    description:
      'This video showcases the exact blueprint used to grow WhatsApp audiences to 2000+ status views in 30 days, using authentic, no-cost techniques.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Real Results.',
    description: 'Watch as we show you how 500+ marketers have scaled their businesses with over 230k monthly earnings from WhatsApp marketing.',
    icon: LockClosedIcon,
  },
  {
    name: 'Hands-on Mentorship.',
    description: 'Join a supportive community of marketers, learning through real-world case studies, live coaching, and actionable feedback.',
    icon: ServerIcon,
  },
];

export default function VideoProofSection() {
  return (
    <div className="bg-white py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto items-center justify-center w-full flex max-w-2xl flex-col gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Content Section */}
          <div className=" lg:pt-4 lg:pl-4 mx-auto flex justify-center items-center flex-col w-full">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:max-w-lg"
            >
              <h2 className="text-center font-semibold text-blue-600">Audience Statistics in 6 Months</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 lg:text-3xl">
                Watch the Results in Action
              </p>
              {/* <p className="mt-6 text-lg text-gray-600">
                Watch the real proof of how WhatsApp marketers are achieving rapid growth and massive revenue through simple yet powerful strategies.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.8 } },
                    }}
                    initial="hidden"
                    animate="show"
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl> */}
            </motion.div>
          </div>

          {/* Video Section */}
          <div className="flex items-start justify-end ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xl"
            >
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
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
