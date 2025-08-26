import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center text-center">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl text-green-400 font-display drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          SunnyDream
        </h1>
        
        <p className="mt-4 text-lg text-gray-300 font-body">
          Full-Stack Developer | Automation Expert
        </p>

        <p className="mt-6 text-gray-400 max-w-lg mx-auto">
          ผมสร้างสรรค์โซลูชันดิจิทัลที่ใช้งานได้จริง ตั้งแต่เว็บแอปพลิเคชันไปจนถึงระบบอัตโนมัติที่ช่วยให้ธุรกิจของคุณเติบโต
        </p>

        {/* ส่วนของปุ่ม Call-to-Action (CTA) */}
        <div className="mt-8 flex justify-center gap-4">
          <Link 
            href="/portfolio"
            className="bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-green-400 transition-all duration-300"
          >
            ดูผลงาน
          </Link>
          <Link 
            href="/contact"
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            ติดต่อ
          </Link>
        </div>
      </div>
    </section>
  );
}