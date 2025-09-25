import Link from "next/link";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Mohit Gangwani</h1>
        <h2 className="text-xl text-gray-600">Senior Data Scientist</h2>
        <p className="mt-2 text-gray-700">
          📞 510.825.3694 | 📧 mohitgangwani@outlook.com |{" "}
          <a
            href="https://github.com/Data-is-life"
            className="text-blue-600 underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/MohitGangwani"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </p>
        <a
          href="/resume.pdf"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          download
        >
          Download PDF
        </a>
      </header>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Summary</h3>
        <p>
          Strategically-minded Senior Data Scientist with over seven years of
          experience in developing and deploying ML models, leading A/B testing,
          causal inference, and statistical analyses to drive high-impact
          business decisions. Proven track record in leading cross-functional
          teams to innovate and implement data-driven solutions, enhancing
          product development and revenue growth.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Employment</h3>
        <h4 className="font-bold">
          Walmart Connect (formerly Vizio, Inc.) — Senior Data Scientist
        </h4>
        <p className="text-sm text-gray-600">San Francisco, CA | May 2021 – Present</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Led team of four DS to design a multivariate change-point detection
            algorithm; improved audience prediction precision by 98%.
          </li>
          <li>
            Developed scalable targeting methodology, expanding audience size by
            20×.
          </li>
          <li>
            Built LSTM forecasting models for Smart TV viewership patterns,
            aiding ad inventory planning.
          </li>
          <li>
            Scaled DS org from 3 → 20+ members; mentored new hires and fostered
            innovation culture.
          </li>
        </ul>

        <h4 className="font-bold">Vizio, Inc. — Data Scientist</h4>
        <p className="text-sm text-gray-600">
          San Francisco, CA | May 2019 – May 2021
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Built recommender model for TV shows, improving precision by 10%.
          </li>
          <li>
            Automated data cleaning pipelines, reducing prep time by 35%.
          </li>
        </ul>

        <h4 className="font-bold">Boons, Inc (Startup) — Data Scientist</h4>
        <p className="text-sm text-gray-600">Fremont, CA | Nov 2018 – Apr 2019</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Achieved 99% precision in ride cost prediction with TensorFlow NN.
          </li>
          <li>
            Automated scripts in Python/SQL, reducing overhead costs by 95%.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Personal Projects</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rise Over Run (iOS App)</strong> — Built app to find flattest
            walking routes in hilly cities using OSM + elevation APIs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Skills & Tools</h3>
        <p>
          <strong>ML & AI:</strong> Regression, XGBoost, Random Forest,
          Clustering, LDA, Neural Nets (TensorFlow, PyTorch). <br />
          <strong>Time Series:</strong> ARIMA, Prophet, LSTM. <br />
          <strong>Tools:</strong> PySpark, Airflow, SQL, Python, Tableau,
          Plotly, Matplotlib. <br />
          <strong>Collaboration:</strong> Cross-functional leadership,
          stakeholder alignment, roadmap planning.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside">
          <li>
            M.S. Data Science (Expected 2026) — University of Colorado Boulder
          </li>
          <li>Data Science Bootcamp — Galvanize, Inc.</li>
          <li>B.S. Civil Engineering — San Jose State University</li>
        </ul>
      </section>
    </div>
  );
}
