export default function Projects() {
  const projects = [
    {
      title: "Sentiment Analysis Demo",
      desc: "Interactive ML demo for text classification.",
      demo: "https://huggingface.co/spaces/yourusername/sentiment-analysis",
    },
    {
      title: "Clustering Visualization",
      desc: "Explore k-means clustering interactively.",
      demo: "https://huggingface.co/spaces/yourusername/clustering",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-700 mb-4">{p.desc}</p>
            <iframe
              src={p.demo}
              width="100%"
              height="400"
              frameBorder="0"
              className="rounded-lg shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
