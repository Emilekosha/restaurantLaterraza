import { ChefHat } from "lucide-react";
import bgImage from "../assets/bgTereza.jpg";
//import videoFile from "../assets/video/your-video-file.MP4";  Assurez-vous que l'extension est en majuscules

const About = () => {
  return (
    <section id="about" className="py-10 bg-sand/10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <ChefHat className="w-12 h-12 text-terracotta mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-primary mb-4">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div>
            <img
              src={bgImage}
              alt="Restaurant interior"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-primary mb-4">
              Une Passion pour la Cuisine Togolaise
            </h3>
            <p className="text-gray-600 mb-6">
              La Terraza est née d'une vision : créer un espace où la cuisine
              togolaise traditionnelle rencontre l'élégance moderne. Notre
              restaurant, fondé en 2015 par la Chef Marie Adjo, s'inspire des
              recettes transmises de génération en génération dans les familles
              togolaises.
            </p>
            <p className="text-gray-600 mb-6">
              Chaque plat raconte une histoire, celle de nos racines et de notre
              héritage culinaire. Nos chefs parcourent régulièrement le Togo à
              la recherche des meilleurs ingrédients et des techniques
              traditionnelles authentiques, qu'ils réinterprètent avec une
              touche contemporaine.
            </p>
            <p className="text-gray-600">
              Notre espace a été conçu pour vous offrir une expérience
              immersive, où chaque détail, des tissus traditionnels aux objets
              d'art, vous transporte dans l'atmosphère chaleureuse du Togo.
              Venez découvrir notre cuisine, où tradition et innovation se
              rencontrent pour créer des moments inoubliables.
            </p>
          </div>

          <video
            controls
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-xl"
          >
            <source
              src="/src/assets/video/your-video-file.MP4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
