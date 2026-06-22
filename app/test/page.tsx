// app/test/page.tsx
export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080F]">
      <div className="bg-[#0C1525] border border-[#48db9c]/20 rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-[#48db9c] mb-4">Test Page</h1>
        <p className="text-[#8A9BB8] text-lg">If this text is green (#48db9c), Tailwind is working!</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-[#48db9c] text-[#05080F] px-6 py-3 rounded-xl font-bold hover:bg-white transition">
            Test Button
          </button>
          <button className="border border-[#48db9c]/30 text-[#48db9c] px-6 py-3 rounded-xl font-bold hover:bg-[#48db9c]/10 transition">
            Test Button 2
          </button>
        </div>
        <div className="mt-6 p-4 bg-[#111E35] rounded-lg">
          <p className="text-white">Background: bg-[#111E35]</p>
          <p className="text-[#48db9c]">Text: text-[#48db9c]</p>
        </div>
      </div>
    </div>
  );
}