import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <ContactCTA />
    </main>
  );
}
