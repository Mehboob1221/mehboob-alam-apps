import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedApp from "../components/FeaturedApp";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#070b1f] min-h-screen text-white">
      <Navbar />
      <Hero />
      <FeaturedApp />
      <Footer />
    </div>
  );
}

export default Home;