import Link from 'next/link';
import { siteConfig } from '@/siteConfig';

export function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            {siteConfig.navTitle}
          </Link>
          <div className="space-x-4">
            <Link href="#experience" className="text-gray-300 hover:text-white transition duration-300">Experience</Link>
            <Link href="#education" className="text-gray-300 hover:text-white transition duration-300">Education</Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
