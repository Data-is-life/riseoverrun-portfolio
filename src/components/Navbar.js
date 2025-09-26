import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">Mohit Gangwani</Link>
        </h1>
        <div className="space-x-6">
          <Link href="/resume" className="text-gray-700 hover:text-blue-600">
            Resume
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
