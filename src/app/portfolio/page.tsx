import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลงาน | SunnyDream",
  description: "รวมผลงาน Web/App Development และ Automation",
};

// 1. สร้าง Array ข้อมูลผลงานของเรา
const projects = [
  {
    title: "เว็บประชาสัมพันธ์ร้านทอง",
    description: "เว็บไซต์สำหรับประชาสัมพันธ์และแสดงสินค้าสำหรับธุรกิจร้านทอง พร้อมระบบหลังบ้านสำหรับจัดการข้อมูล",
    tags: ["React", "Next.js", "Web Development"],
    imageUrl: "/images/goldshop2.png", // เราจะใช้รูปนี้ไปก่อน
  },
  {
    title: "โปรแกรมจัดการร้านทอง (Desktop App)",
    description: "โปรแกรมสำหรับจัดการสต็อกสินค้า การซื้อขาย และข้อมูลลูกค้าสำหรับร้านทองโดยเฉพาะ",
    tags: ["Java", "Desktop App", "Backend"],
    imageUrl: "/images/goldshop1.png",
  },
  {
    title: "Twitch Extension (ยอดขาย 2M+)",
    description: "ส่วนเสริมสำหรับ Twitch ของเกมชื่อดัง สร้าง Interaction ระหว่างผู้ชมและสตรีมเมอร์ มียอดขายกว่า 2 ล้านบาท",
    tags: ["TypeScript", "React", "Game Development", "API"],
    imageUrl: "/images/notmonday2.png",
  },
  {
    title: "ระบบหลังบ้านหน่วยงานคุณวุฒิวิชาชีพ",
    description: "พัฒนาระบบ Backend สำหรับจัดการข้อมูลและกระบวนการทำงานภายในของหน่วยงานคุณวุฒิวิชาชีพ",
    tags: ["Java", "Spring Boot", "Backend", "Enterprise","Database"],
    imageUrl: "/images/vechacheap.png",
  },
  {
    title: "Facebook Automation Bot",
    description: "ระบบอัตโนมัติที่ดึงกระทู้ยอดนิยมจาก Pantip มาสร้างเป็นโพสต์สำหรับเพจ Facebook พร้อมแทรกลิงก์ Affiliate",
    tags: ["n8n", "Automation", "API", "Node.js"],
    imageUrl: "/images/pageface2.png",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-center text-4xl font-display mb-10">ผลงานของฉัน</h1>
      
      {/* 2. สร้าง Grid Layout สำหรับแสดงผลงาน */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3. วนลูปแสดงผลงานแต่ละชิ้น */}
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}