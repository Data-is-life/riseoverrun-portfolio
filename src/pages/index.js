import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohit Gangwani | Data Scientist</title>
        <meta
          name="description"
          content="Portfolio of Mohit Gangwani, Senior Data Scientist specializing in machine learning, analytics, and data-driven solutions."
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-light to-white"
      >
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-5xl font-extrabold text-dark mb-4">
          Mohit Gangwani
        </h1>
        <h2 className="text-2xl text-primary mb-6">Senior Data Scientist</h2>
        <p className="max-w-2xl text-gray-700 leading-relaxed mb-6">
          Strategically-minded data scientist with 7+ years of experience in
          machine learning, causal inference, and analytics. I love building
          products and tools that connect technical solutions to real-world
          business impact.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-dark">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m passionate about data-driven problem solving and building
            ML-powered solutions. Currently working at Walmart Connect, where I
            design and deploy algorithms that optimize ad targeting,
            measurement, and user engagement.
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center text-dark">
            Resume
          </h3>
          <div className="bg-white shadow rounded-lg p-8 space-y-6">
            <div>
              <h4 className="font-bold text-primary">
                Walmart Connect — Senior Data Scientist
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                San Francisco, CA | May 2021 – Present
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Led DS team to build change-point detection algorithms (↑98%
                  precision).
                </li>
                <li>Developed LSTM forecasting for Smart TV viewership.</li>
                <li>
                  Scaled DS org from 3 → 20+; mentored junior scientists.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary">Vizio — Data Scientist</h4>
              <p className="text-sm text-gray-600 mb-2">
                San Francisco, CA | May 2019 – May 2021
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Improved TV recommender precision by 10% with LDA + cosine
                  similarity.
                </li>
                <li>Automated data cleaning pipelines (↓35% prep time).</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary">Boons, Inc. — Data Scientist</h4>
              <p className="text-sm text-gray-600 mb-2">
                Fremont, CA | Nov 2018 – Apr 2019
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Achieved 99% precision in ride cost prediction with TensorFlow
                  NN.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow hover:bg-red-600 transition"
            >
              📄 Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-r from-light to-indigo-50"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center text-dark">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6 transform transition hover:-translate-y-1 hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Sentiment Analysis
              </h4>
              <p className="text-gray-700 mb-4">
                Interactive ML demo for text classification.
              </p>
              <iframe
                src="https://huggingface.co/spaces/yourusername/sentiment-analysis"
                width="100%"
                height="300"
                frameBorder="0"
                className="rounded-lg"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-6 transform transition hover:-translate-y-1 hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Clustering Visualization
              </h4>
              <p className="text-gray-700 mb-4">
                Interactive demo exploring k-means clusters.
              </p>
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
      <section id="contact" className="py-20 bg-secondary text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="mb-6">
          Let’s connect! Reach out for collaborations or opportunities.
        </p>
        <div className="flex justify-center space-x-8">
          {/* Replace these with lucide-react icons if installed */}
          <a
            href="mailto:mohitgangwani@outlook.com"
            className="hover:text-gray-200 transition"
          >
            ✉️ Email
          </a>
          <a
            href="https://github.com/Data-is-life"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/MohitGangwani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-200 bg-dark">
        © {new Date().getFullYear()} Mohit Gangwani
      </footer>
    </div>
  );
}
