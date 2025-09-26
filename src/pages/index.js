import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Hi, I’m Mohit 👋
      </h1>
      <h2 className="text-xl text-blue-600 mb-6">
        Senior Data Scientist | Builder of ML & Analytics Solutions
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
        I specialize in machine learning, causal inference, and data-driven
        decision-making. Passionate about building tools, apps, and models that
        bridge business goals with technical solutions.
      </p>

      <div className="space-x-4">
        <Link
          href="/resume"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Resume
        </Link>
        <Link
          href="/projects"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
