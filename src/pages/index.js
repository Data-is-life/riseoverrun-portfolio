import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohit Gangwani | Data Scientist</title>
        <meta name="description" content="Portfolio of Mohit Gangwani, Senior Data Scientist specializing in machine learning, analytics, and data-driven solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-light to-white"
      >
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-5xl font-extrabold text-dark mb-4">Mohit Gangwani</h1>
        <h2 className="text-2xl text-primary mb-6">Senior Data Scientist</h2>
        <p className="max-w-2xl text-gray-700 leading-relaxed mb-6">
          Strategically-minded data scientist with 7+ years of experience in machine learning,
          causal inference, and analytics. I love building products and tools that connect
          technical solutions to real-world business impact.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          View My Work
        </a>
      </section>
    </div>
  );
}