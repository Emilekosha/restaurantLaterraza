import bgImg from "../assets/plat.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative h-[60vh] overflow-hidden md:h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Centre l'image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-7xl mb-4 sm:mb-6">
            Restaurant La Terrazza
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            La Terrazza : Restaurant en terrasse et salle climatisée. Cuisine internationale, cocktails, événements
          </p>
          <a
            href="#reservation"
            className="inline-block bg-accent hover:bg-accent-light text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-base sm:text-lg transition-colors duration-300"
          >
            Réserver une Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;