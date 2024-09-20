import ButtonGradient from "@/assets/svg/ButtonGradient";
import Benefits from "@/components/benefits/benefits.component";
import Button from "@/components/button/button.component";
import Collaboration from "@/components/collaboration/collaboration.component";
import Header from "@/components/header/header.component";
import Hero from "@/components/hero/hero.component";
import Services from "@/components/services/services.component";

const Home = () => {
  return (
    <main>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>

      <ButtonGradient />
    </main>
  );
};

export default Home;
