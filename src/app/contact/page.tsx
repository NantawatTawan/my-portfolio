import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อ | SunnyDream",
  description: "ช่องทางการติดต่อสำหรับจ้างงานและสอบถามข้อมูลเพิ่มเติม",
};

// ไอคอน SVG สำหรับใช้ในหน้า
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// ตรวจสอบบรรทัดนี้ให้แน่ใจว่าไม่มีคำว่า async
export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-display mb-4">ติดต่อฉัน</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          สนใจร่วมงาน, มีคำถาม, หรือมีโปรเจกต์ที่น่าสนใจ? <br/>
          สามารถติดต่อผมได้ผ่านช่องทางด้านล่างนี้เลยครับ
        </p>
      </div>

      <div className="mt-12 max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg p-8">
        <div className="flex flex-col space-y-6">
          
          {/* Email */}
          <a 
            href="mailto:tawannantawat@gmail.com" 
            className="flex items-center space-x-4 group"
          >
            <MailIcon className="text-gray-400 group-hover:text-green-400 transition-colors" />
            <div>
              <p className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">อีเมล</p>
              <p className="text-gray-400">tawannantawat@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/nantawatnokvoharn"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 group"
          >
            <LinkedinIcon className="text-gray-400 group-hover:text-green-400 transition-colors" />
            <div>
              <p className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">LinkedIn</p>
              <p className="text-gray-400">เชื่อมต่อและดูโปรไฟล์</p>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
}