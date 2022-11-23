import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app_parent"  >
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
