import {
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
} from 'react-icons/bs';
import { Logo } from './Logo';

const navigation = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Jobs', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: BsFacebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: BsInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: BsLinkedin,
    },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com/',
      icon: BsTwitter,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm text-gray-600">
              Leading WhatsApp marketing and audience growth expert. Helping entrepreneurs grow and monetize their WhatsApp audience.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm text-gray-600">
            &copy; 2024 Chima Ugbaja E. All rights reserved. | <a href="#" className="text-blue-600 hover:text-blue-800">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
