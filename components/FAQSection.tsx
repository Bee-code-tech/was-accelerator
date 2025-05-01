'use client';

import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const SkeletonLoader = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="lg:text-4xl text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Loading FAQs...</h2>
        <div className="mt-16">
          {/* Placeholder for loading state */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 rounded" />
            <div className="h-6 bg-gray-300 animate-pulse w-5/6 rounded" />
            <div className="h-6 bg-gray-300 animate-pulse w-2/3 rounded" />
            <div className="h-6 bg-gray-300 animate-pulse w-4/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

type FAQ = {
  title: string;
  faqs: { question: string; answer: string }[];
};

const FAQSection = () => {
  const [faqData, setFaqData] = useState<FAQ | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "faq"][0]`)
      .then((data) => setFaqData(data))
      .catch(console.error);
  }, []);

  if (!faqData) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="lg:text-4xl text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {faqData?.title || 'Frequently Asked Questions'}
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqData?.faqs?.map((faq, index) => (
              <Disclosure key={index} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
