import Hero from './Hero';
import About from './About';
import MenuSection from './MenuSection';
import Events from './Events';
import Location from './Location';
import Reservation from './Reservation';

const HomePage = () => {
  return (
    <>
      <section id="accueil">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="reservation">
        <Reservation />
      </section>
    </>
  );
};

export default HomePage;