import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
