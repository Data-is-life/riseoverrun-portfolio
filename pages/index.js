import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Mohit Gangwani</h1>
      <h2 className="text-xl text-gray-600 mb-8">Senior Data Scientist</h2>
      <p className="max-w-2xl mb-6">
        Strategically-minded data scientist with 7+ years of experience in ML, causal inference,
        and data-driven decision-making. I build impactful solutions at the intersection of analytics,
        product, and engineering.
      </p>
      <nav className="space-x-6">
        <Link href="/resume" className="text-blue-600 hover:underline">Resume</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </div>
  );
}
