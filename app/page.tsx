import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import Activities from '@/components/Activities';
import ResearchAreas from '@/components/ResearchAreas';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Activities />
      <ResearchAreas />
      <Contact />
      <Footer />
    </main>
  );
}
