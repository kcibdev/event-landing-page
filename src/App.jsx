import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import HomePage from "./pages/Home";
import Intro from "./pages/Intro";
import Waitlist from "./pages/Waitlist";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Intro />
      <Features />
      <Waitlist />
      <Footer />
    </>
  );
}

export default App;
