export default function Resume() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Mohit Gangwani</h1>
        <h2 className="text-xl text-blue-600 mt-2">Senior Data Scientist</h2>
        <p className="mt-2 text-gray-600">
          📞 510.825.3694 | 📧 mohitgangwani@outlook.com
        </p>
        <p>
          <a href="https://github.com/Data-is-life" className="text-blue-500 underline">GitHub</a> ·{" "}
          <a href="https://linkedin.com/in/MohitGangwani" className="text-blue-500 underline">LinkedIn</a>
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          📄 Download PDF
        </a>
      </header>

      {/* Summary */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Strategically-minded Senior Data Scientist with 7+ years of experience in
          ML, causal inference, and statistical analyses. Proven record in leading
          cross-functional teams and aligning technical solutions with business goals.
        </p>
      </section>

      {/* Employment */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Employment</h3>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h4 className="text-lg font-bold">Walmart Connect — Senior Data Scientist</h4>
          <p className="text-sm text-gray-500 mb-4">San Francisco, CA | May 2021 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Led team of 4 DS to design multivariate change-point detection algorithm; improved audience precision by 98%.</li>
            <li>Built scalable targeting methodology, expanding audience size 20×.</li>
            <li>Developed LSTM forecasting models for Smart TV viewership.</li>
            <li>Scaled DS org from 3 → 20+, mentoring hires and fostering innovation.</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h4 className="text-lg font-bold">Vizio, Inc. — Data Scientist</h4>
          <p className="text-sm text-gray-500 mb-4">San Francisco, CA | May 2019 – May 2021</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Built recommender model for TV shows, boosting precision by 10%.</li>
            <li>Automated data cleaning pipelines, reducing prep time by 35%.</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="text-lg font-bold">Boons, Inc. — Data Scientist</h4>
          <p className="text-sm text-gray-500 mb-4">Fremont, CA | Nov 2018 – Apr 2019</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Achieved 99% precision in ride cost prediction with TensorFlow NN.</li>
            <li>Automated scripts in Python/SQL, reducing overhead costs by 95%.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
