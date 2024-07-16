import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/button/button.component";
import Header from "@/components/header/header.component";
import Hero from "@/components/hero/hero.component";

const Home = () => {
  return (
    <main>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      
      <Header />
      <Hero />
      </div>

      <ButtonGradient />
    </main>
  );
};

export default Home;
