import Link from 'next/link';

// SVG Icons
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// 1. เพิ่มไอคอน Fastwork
const FastworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13.68 6.45h-5.3V4.68h5.3c1.07 0 1.95.87 1.95 1.95v11.7c0 1.07-.88 1.95-1.95 1.95h-5.3v-1.77h5.3c.1 0 .18-.08.18-.18V6.63c0-.1-.08-.18-.18-.18zM8.38 20.28H3.08c-1.07 0-1.95-.88-1.95-1.95V5.73c0-1.08.88-1.95 1.95-1.95h5.3v1.77H3.08c-.1 0-.18.08-.18.18v12.6c0 .1.08.18.18.18z"></path></svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full z-10 bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-500">
            © {currentYear} SunnyDream. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* 2. เปลี่ยนจาก GitHub เป็น Fastwork */}
            <a href="https://fastwork.co/user/tawanntw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FastworkIcon />
            </a>
            <a href="https://www.linkedin.com/in/nantawatnokvoharn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}