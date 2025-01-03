import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";
import Skills from "./components/skills";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
});

function MyApp() {
  return (
    <div className={montserrat.className}>
      <main className="min-h-screen text-white gradient-background flex justify-around md:justify-center flex-col lg:flex-row p-4">
        <div className="flex flex-col lg:mr-8">
          <About />
          <Projects />
        </div>
        <div className="flex flex-col">
          <Skills />
          <Contact />
          <Resume />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default MyApp;
