import { DuctTunnel } from './components/DuctTunnel';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-zinc-950 text-white min-h-screen font-sans selection:bg-cyan-500/30">
      <DuctTunnel />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
