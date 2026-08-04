import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedApp from "./components/FeaturedApp";
import Footer from "./components/Footer";
import About from "./components/About";
import Download from "./components/Download";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ThemeSwitcher from "./components/ThemeSwitcher";
import VisitorCounter from "./components/VisitorCounter";
import NotificationManager from "./components/Notification";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <>
      {/* Background Effects */}
      <ParticlesBackground />
      <div className="animated-bg"></div>
      
      {/* Premium Features */}
      <CustomCursor />
      
      <ThemeSwitcher />
      <VisitorCounter />
      <NotificationManager />
      <ScrollProgress />
      <BackToTop />
      
      {/* Main Content with Page Transitions */}
      <PageTransition>
        <Navbar />
        <Hero />
        <Stats />
        <FeaturedApp />
        <About />
        <Download />
        <Contact />
        <Footer />
      </PageTransition>
    </>
  );
}

export default App;