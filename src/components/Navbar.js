import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <Link href="#home">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <h1 className="text-xl font-bold text-dark">Mohit Gangwani</h1>
        </div>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-primary">About</a>
          <a href="#resume" className="text-gray-700 hover:text-primary">Resume</a>
          <a href="#projects" className="text-gray-700 hover:text-primary">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
}
