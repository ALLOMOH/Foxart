import {uiInterface} from "../assets";
import Button from "./Button";
import Container from "./Container";
import {Grid} from './theme/Hero';
const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div class="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
            <h1 className="hero">
              Build <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">Modern</span> Saas for Startups
            </h1>
            <p className="body-1 text-n-5">SAAS is the most mature, stable, and powerful professional grade CSS extension language in the world</p>
        <Button theme="primary" href="#/pricing">
            Pricing and plans
        </Button>
        <img src={uiInterface} alt="Ui Interface illustration"/>
        </div>
      </Container>
      <Grid/>
    </div>
  );
};

export default Hero;
