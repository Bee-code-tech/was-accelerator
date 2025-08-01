"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  GlobeAltIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

const learningPoints = [
  {
    name: 'WhatsApp Marketing Mastery',
    description: 'Comprehensive breakdown of WhatsApp marketing and how to successfully launch profitable online courses.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Brand Building Framework',
    description: 'Develop a profitable and influential personal or business brand that attracts high-quality clients.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Digital Product Creation',
    description: 'Step-by-step process to create diverse, marketable digital products that sell consistently.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Content Strategy System',
    description: 'Never run out of ideas with our daily WhatsApp status content generation framework.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Sales Conversion Tactics',
    description: 'Avoid critical selling mistakes and implement proven conversion strategies for WhatsApp sales.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'WhatsApp Automation',
    description: 'Set up systems to automatically reply to frequent chats, saving time while maintaining customer relationships.',
    icon: CogIcon,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Learn = () => {
  return (
    <div className="bg-white pb-16 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
          >
              
              <motion.div
                        variants={itemVariants}
                        className="mx-auto max-w-2xl lg:text-center"
                      >
                        <h2 className="text-base font-semibold text-blue-600">Course Bonuses</h2>
                        <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                          What you will also learn
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive curriculum covers everything you need to build, grow, and monetize your WhatsApp presence from scratch.
          </p>
                      </motion.div>
       

        <motion.dl
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:max-w-5xl lg:gap-y-16"
        >
          {learningPoints.map((point) => (
            <motion.div
              key={point.name}
              variants={itemVariants}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <point.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {point.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{point.description}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  );
};

export default Learn;