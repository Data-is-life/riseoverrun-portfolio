export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        Feel free to reach out for opportunities, collaborations, or just to connect.
      </p>
      <ul className="space-y-3">
        <li>
          <a href="mailto:mohitgangwani@outlook.com" className="text-blue-600 underline">
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/Data-is-life" className="text-blue-600 underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/MohitGangwani" className="text-blue-600 underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
