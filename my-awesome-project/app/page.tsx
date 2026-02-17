export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          สวัสดีครับ! ผมชื่อ [ชื่อของคุณ]
        </h1>
      </div>
      
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700">
        <p className="text-xl mb-4">ยินดีต้อนรับสู่โปรเจกต์ Next.js แรกของผม</p>
        <ul className="list-disc ml-6 space-y-2 text-slate-300">
          <li>กำลังหัดเขียน React ⚛️</li>
          <li>ชอบลองเล่นเทคโนโลยีใหม่ๆ 🚀</li>
          <li>โปรเจกต์นี้รันบน localhost:3000 แล้ว! ✅</li>
        </ul>
      </div>
    </main>
  );
}