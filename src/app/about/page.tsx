import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เกี่ยวกับฉัน | SunnyDream",
  description: "ประวัติ, ทักษะ, และปรัชญาการทำงานของ Full-Stack Developer",
};

// Data for skills
const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  backend: ["Java", "Spring Boot", "Node.js", "REST APIs", "PostgreSQL"],
  mobile: ["Flutter", "Dart"],
  automation: ["n8n", "Zapier", "API Integration"],
  tools: ["Git", "Docker", "VS Code", "Figma", "AWS", "GCP"],
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-center text-4xl font-display mb-10">เกี่ยวกับฉัน</h1>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
        {/* Section: Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">สวัสดีครับ,</h2>
          <p className="text-gray-300 leading-relaxed">
            ผมเป็น Full-Stack Developer ที่หลงใหลในการแก้ปัญหาที่ซับซ้อนให้กลายเป็นโซลูชันที่เรียบง่ายและใช้งานได้จริง จุดแข็งของผมคือการส่งมอบงานที่ &quot;ตรงตามความต้องการจริงๆ&quot; โดยเน้นความยืดหยุ่นในการทำงานและสื่อสารกับลูกค้าอย่างตรงไปตรงมา เพื่อให้โปรเจกต์สำเร็จลุล่วงตามเป้าหมายโดยไม่มีข้อแก้ตัว
          </p>
        </section>

        {/* Section: My Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">ทักษะและความเชี่ยวชาญ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Automation</h3>
              <div className="flex flex-wrap gap-2">
                {skills.automation.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
             <div>
              <h3 className="text-lg font-bold mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Call to Action */}
        <section className="text-center">
           <h2 className="text-2xl font-bold text-green-400 mb-4">มาสร้างโปรเจกต์ดีๆ ด้วยกัน</h2>
           <p className="text-gray-400 mb-6">หากคุณมีไอเดียหรือกำลังมองหานักพัฒนาที่ไว้ใจได้ อย่าลังเลที่จะติดต่อผม</p>
           <Link href="/contact" className="bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-green-400 transition-all duration-300">
             ติดต่อฉัน
           </Link>
        </section>
      </div>
    </div>
  );
}