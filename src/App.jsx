import Header from './components/Header';
import Hero from './components/Hero';
import { Branding } from './components/Branding';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';
import { BulletPoints } from './components/BulletPoints';
import {Princing} from './components/Princing';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Branding/>
      <Features/>
      <CallToAction/>
      <BulletPoints/>
      <Princing />
      <CallToAction minify/>
      <Footer/>
      <Analytics />
    </>
  );
}

export default App;
