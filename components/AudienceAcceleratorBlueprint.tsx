'use client'
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Rapid Audience Growth',
    description:
      'Grow your WhatsApp audience to 2,000+ status views in under 30 days using powerful organic strategies—no referrals or contact gain needed.',
    icon: ChartBarIcon,
  },
  {
    name: 'Monetization Blueprint',
    description:
      'Learn exactly how to monetize your audience and make over 230k monthly with your WhatsApp—using simple but effective marketing tricks.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Community Support & Mentorship',
    description:
      'Join 500+ WhatsApp marketers in a mentorship community with free lifetime coaching, guidance, and resource sharing.',
    icon: UsersIcon,
  },
  {
    name: 'Tools, Automation & Copywriting',
    description:
      'Master high-converting copywriting, traffic generation, automation tools, and learn how to create engaging, profitable content daily.',
    icon: SparklesIcon,
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AudienceAcceleratorBlueprint() {
  return (
    <div className="bg-white py-14 sm:py-32" id='outline'>
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
          <h2 className="text-base font-semibold text-blue-600">Blueprint Breakdown</h2>
          <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Introducing the Audience Accelerator Blueprint
          </p>
          <p className="mt-6 text-lg text-gray-600">
            This powerful system shows you exactly how to build, grow, and monetize your WhatsApp audience fast — without spam, stress or spending on ads.
          </p>
        </motion.div>

        <motion.dl
          variants={containerVariants}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl grid grid-cols-1 gap-x-8 gap-y-10  lg:grid-cols-2 lg:gap-y-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon aria-hidden="true" className="size-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  )
}
