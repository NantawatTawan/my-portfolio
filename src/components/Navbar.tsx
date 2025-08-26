'use client';

import { useState } from 'react';
import Link from 'next/link';

// Data for navigation links
const navLinks = [
  { name: 'ผลงาน', href: '/portfolio' },
  { name: 'เกี่ยวกับฉัน', href: '/about' },
  { name: 'บริการ', href: '/services' },
  { name: 'ติดต่อ', href: '/contact' },
];

// SVG Icons for the mobile menu button
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
);


export default function Navbar() {
  // State to manage if the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-20 border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo or brand name */}
            <Link href="/" className="text-xl font-display text-white hover:text-green-400 transition-colors" onClick={() => setIsOpen(false)}>
              SunnyDream
            </Link>

            {/* Desktop Menu Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 z-10 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-display text-gray-300 hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}