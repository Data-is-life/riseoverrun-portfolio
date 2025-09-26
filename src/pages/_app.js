import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
