import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'บริการ | SunnyDream',
  description: 'บริการพัฒนาเว็บแอปพลิเคชัน, แอปมือถือ, และระบบอัตโนมัติ',
};

// SVG Icons
const WebIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const MobileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const AutomationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20v-6M12 8V2"/><path d="m14.5 11-2.5-2.5-2.5 2.5"/><path d="m9.5 13 2.5 2.5 2.5-2.5"/><path d="M20 12h-6M8 12H2"/><path d="m18.36 5.64-3.54 3.54"/><path d="m9.18 14.82 3.54 3.54"/><path d="m5.64 5.64 3.54 3.54"/><path d="m14.82 14.82-3.54 3.54"/></svg>
);

const services = [
  {
    icon: <WebIcon />,
    title: 'Web Application Development',
    description: 'พัฒนาเว็บแอปพลิเคชันเต็มรูปแบบ ตั้งแต่หน้าบ้านจนถึงหลังบ้าน ตอบโจทย์ธุรกิจของคุณด้วยเทคโนโลยีที่ทันสมัยและมีประสิทธิภาพ',
    tech: ['React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot']
  },
  {
    icon: <MobileIcon />,
    title: 'Mobile Application Development',
    description: 'สร้างแอปพลิเคชันสำหรับ iOS และ Android ด้วย Flutter ที่สามารถทำงานได้อย่างรวดเร็วและมีหน้าตาที่สวยงามบนทุกอุปกรณ์',
    tech: ['Flutter', 'Dart', 'Firebase']
  },
  {
    icon: <AutomationIcon />,
    title: 'Workflow & API Automation',
    description: 'ออกแบบและสร้างระบบทำงานอัตโนมัติ เชื่อมต่อ API ต่างๆ เพื่อลดขั้นตอนการทำงานซ้ำซ้อน เพิ่ม Productivity ให้กับธุรกิจของคุณ',
    tech: ['n8n', 'Node.js', 'REST APIs', 'Webhooks']
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-display mb-4">บริการของฉัน</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          ผมให้บริการพัฒนาซอฟต์แวร์ครบวงจร โดยมุ่งเน้นที่การสร้างโซลูชันที่มีคุณภาพและตอบโจทย์ความต้องการทางธุรกิจอย่างแท้จริง
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <div className="text-green-400 mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-400 flex-grow mb-4">{service.description}</p>
            <div>
              <h3 className="text-sm font-bold text-gray-300 mb-2">เทคโนโลยีที่ใช้:</h3>
              <div className="flex flex-wrap gap-2">
                {service.tech.map(t => <span key={t} className="skill-badge">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-gray-800 border border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">สนใจเริ่มต้นโปรเจกต์ของคุณ?</h2>
        <p className="text-gray-400 mb-6">ติดต่อผมเพื่อพูดคุยรายละเอียดและประเมินราคาเบื้องต้นได้เลย</p>
        <Link href="/contact" className="bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-green-400 transition-all duration-300">
          เริ่มคุยโปรเจกต์
        </Link>
      </div>
    </div>
  );
}