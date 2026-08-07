import Hero from '@/components/Hero';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <main className="flex-1">
      <LoadingScreen />
      <ScrollProgressBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Gallery />
    </main>
  );
}
