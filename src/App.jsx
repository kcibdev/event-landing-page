import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import HomePage from "./pages/Home";
import Intro from "./pages/Intro";
import Waitlist from "./pages/Waitlist";
import Contact from "./pages/Contact";
// import Screenshots from "./pages/Screenshot";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Intro />
      <Features />
      {/* <Screenshots /> */}
      <Waitlist />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
