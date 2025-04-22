import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the N-WAAM strategy?",
    answer:
      "It is a well-recorded video training that shows you, step by step, how to grow your WhatsApp audience, automate your WhatsApp activities, and transform your WhatsApp into a cash machine that pulls in cool cash for you daily.",
  },
  {
    question: "How long will it take me to reach 1k status views?",
    answer:
      "Practically, with consistent effort and the right strategy, it takes just 2 weeks to 1 month to reach 1,000 views on your WhatsApp status.",
  },
  {
    question: "What phone can I use to practice this course?",
    answer:
      "The course is fully compatible with any smartphone or tablet - whether you're using Android, iOS, or iPads, you’re good to go.",
  },
  {
    question: "How much is the N-WAAM course?",
    answer:
      "The N-WAAM strategy course is currently available at a discounted fee of ₦5,000. Please note that this is a limited-time offer, as the price will soon increase to ₦10,000.",
  },
]

export default function FAQSection() {
  return (
    <div className="bg-white" id='faq'>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="lg:text-4xl text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
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
  )
}
