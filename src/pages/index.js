export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Mohit Gangwani</h1>
        <h2 className="text-2xl text-blue-600 mb-6">Senior Data Scientist</h2>
        <p className="max-w-2xl text-gray-700 leading-relaxed">
          Strategically-minded data scientist with 7+ years of experience in machine learning,
          causal inference, and analytics. I love building products and tools that connect
          technical solutions to real-world business impact.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m passionate about data-driven problem solving and building ML-powered solutions.
            Currently working at Walmart Connect, where I design and deploy algorithms
            that optimize ad targeting, measurement, and user engagement.
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Resume</h3>
          <div className="bg-white shadow rounded-lg p-8 space-y-6">
            <div>
              <h4 className="font-bold">Walmart Connect — Senior Data Scientist</h4>
              <p className="text-sm text-gray-600 mb-2">San Francisco, CA | May 2021 – Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Led DS team to build change-point detection algorithms (↑98% precision).</li>
                <li>Developed LSTM forecasting for Smart TV viewership.</li>
                <li>Scaled DS org from 3 → 20+; mentored junior scientists.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Vizio — Data Scientist</h4>
              <p className="text-sm text-gray-600 mb-2">San Francisco, CA | May 2019 – May 2021</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Improved TV recommender precision by 10% with LDA + cosine similarity.</li>
                <li>Automated data cleaning pipelines (↓35% prep time).</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Boons, Inc. — Data Scientist</h4>
              <p className="text-sm text-gray-600 mb-2">Fremont, CA | Nov 2018 – Apr 2019</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Achieved 99% precision in ride cost prediction with TensorFlow NN.</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              📄 Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 shadow rounded-lg p-6">
              <h4 className="font-semibold mb-2">Sentiment Analysis</h4>
              <p className="text-gray-700 mb-4">Interactive ML demo for text classification.</p>
              <iframe
                src="https://huggingface.co/spaces/yourusername/sentiment-analysis"
                width="100%"
                height="300"
                frameBorder="0"
                className="rounded-lg"
              />
            </div>
            <div className="bg-gray-50 shadow rounded-lg p-6">
              <h4 className="font-semibold mb-2">Clustering Visualization</h4>
              <p className="text-gray-700 mb-4">Interactive demo exploring k-means clusters.</p>
              <iframe
                src="https://huggingface.co/spaces/yourusername/clustering"
                width="100%"
                height="300"
                frameBorder="0"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="mb-4 text-gray-700">Let’s connect! Reach out for collaborations or opportunities.</p>
        <div className="space-x-6">
          <a href="mailto:mohitgangwani@outlook.com" className="text-blue-600 underline">Email</a>
          <a href="https://github.com/Data-is-life" className="text-blue-600 underline">GitHub</a>
          <a href="https://linkedin.com/in/MohitGangwani" className="text-blue-600 underline">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Mohit Gangwani
      </footer>
    </div>
  );
}