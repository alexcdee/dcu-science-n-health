import About from "./components/About";
import CalendarSection from "./components/CalendarSection";
import Committee from "./components/Committee";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import JoinCta from "./components/JoinCta";
import Navbar from "./components/Navbar";
import Schools from "./components/Schools";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Schools />
      <Events />
      <CalendarSection />
      <Gallery />
      <Committee />
      <JoinCta />
      <Footer />
    </>
  );
}

export default App;
